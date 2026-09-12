/**
 * WebGIS-Dev GitHub 开源数据边缘 API（Cloudflare Worker）
 *
 * 为什么需要它：
 * - api.github.com / raw.githubusercontent.com 在国内直连不稳定，且匿名限流 60 次/小时/IP；
 * - Worker 跑在 Cloudflare 边缘，境外抓 GitHub 极稳，结果再缓存 10 分钟，
 *   前端只跟自己的 Worker 通信（workers.dev 或自有域名，国内连通性好得多）。
 *
 * 路由（均为 GET，公开只读）：
 *   /api/stats  → { stars, forks, updatedAt, version, repo, fetchedAt }（JSON，边缘缓存 10 分钟）
 *   /api/chart  → star-history 趋势图 SVG 代理（边缘缓存 6 小时，每日更新足够）
 *   /api/snake /api/snake-dark → GitHub 贡献贪吃蛇动画 SVG 代理（供 NEGIAO.github.io 首页，
 *     上游由 Platane/snk 每日重新生成，边缘缓存 6 小时）
 *   /api/activity-graph.svg → 贡献活动折线/面积图（自绘 SVG + 描线动画，边缘缓存 6 小时）
 *
 * 部署（本目录执行，需要一个 Cloudflare 账号，免费计划即可）：
 *   npx wrangler login
 *   npx wrangler deploy
 *   # 可选（推荐）：GitHub API 限额 60/h → 5000/h
 *   npx wrangler secret put GITHUB_TOKEN
 *   # 可选：轮换 star-history 授权（默认内置 README 里已公开的那个，不设也能用）
 *   npx wrangler secret put STAR_HISTORY_SEALED_TOKEN
 * 部署成功后，把输出的 https://xxx.workers.dev 填到 deploy/.env 的
 * VITE_GITHUB_STATS_WORKER_URL，重建前端即可（push main 自动部署）。
 */

const REPO = 'NEGIAO/WebGIS-Dev';
const GITHUB_API_URL = `https://api.github.com/repos/${REPO}`;
const README_RAW_URL = `https://raw.githubusercontent.com/${REPO}/main/README.md`;
// README 唯一版本源：三档解析与前端 LandingView.parseVersionFromReadme 保持一致。
const STATS_CACHE_TTL = 600; // 秒：Stars / Forks / 版本号边缘缓存
const CHART_CACHE_TTL = 6 * 3600; // 秒：趋势图边缘缓存（每日更新足够）
const SNAKE_CACHE_TTL = 6 * 3600; // 秒：贪吃蛇动画边缘缓存（上游每日重新生成）
// 贪吃蛇贡献动画固定上游（NEGIAO 主页画像仓 output 分支）：固定地址，非开放代理
const SNAKE_BASE_URL = 'https://raw.githubusercontent.com/NEGIAO/NEGIAO/output';
// 已在 README 公开的 sealed_token：内置仅为开箱即用，安全等级与公开无异；
// 如需轮换，用 wrangler secret put STAR_HISTORY_SEALED_TOKEN 覆盖，无需改代码。
const DEFAULT_SEALED_TOKEN =
    'B5ReoH7FL9EMbjs7rJJ3APlIoYZwGKo3g2gC_4_0LxIrQ--e5uhUrYXR7UEBcnb3CU48BAX9--IyzI-TxTszy8HrMJ3oVSVvfowMjrMOxY8n477EUd4_Ip6F8EMaHsKX6H5b1JjudmBoRUn3HxJ1R6zxt3lO1CKGidFnlqFb2W_TXYy_sTk3AS3rn8v8';

// 边缘缓存统一 key（fetch / scheduled 共用，保证定时暖缓存能被用户请求命中）
const statsCacheKey = () => new Request('https://webgis-stats.internal/api/stats');
const chartCacheKey = () => new Request('https://webgis-stats.internal/api/chart');
const snakeCacheKey = (variant) => new Request(`https://webgis-stats.internal/api/${variant}`);
const activityGraphCacheKey = () => new Request('https://webgis-stats.internal/api/activity-graph.svg');

function parseVersionFromReadme(markdown) {
    if (!markdown || typeof markdown !== 'string') return '';
    const declared = markdown.match(/当前版本\s*[Vv]?(\d+\.\d+(?:\.\d+)?)/);
    if (declared) return `V${declared[1]}`;
    // 版本演进表按最新在前排序，取首行（避免误命中正文里的历史版本号，如 Docker 镜像旧版本）
    const tableRow = markdown.match(/\|\s*\*\*V(\d+\.\d+\.\d+)\*\*\s*\|/);
    if (tableRow) return `V${tableRow[1]}`;
    const footer = markdown.match(/<sub>V(\d+\.\d+\.\d+)/);
    if (footer) return `V${footer[1]}`;
    return '';
}

function corsHeaders() {
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    };
}

function jsonResponse(data, status = 200, extraHeaders = {}) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            ...corsHeaders(),
            ...extraHeaders,
        },
    });
}

async function fetchUpstream(url, { token, accept } = {}) {
    const headers = {
        'User-Agent': 'WebGIS-Dev-stats-worker/1.0',
        Accept: accept || 'application/vnd.github+json',
    };
    if (token) headers.Authorization = `Bearer ${token}`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`upstream ${url} -> HTTP ${res.status}`);
    return res;
}

async function buildStats(env) {
    const [repoRes, readmeRes] = await Promise.all([
        fetchUpstream(GITHUB_API_URL, { token: env.GITHUB_TOKEN }),
        fetchUpstream(README_RAW_URL, { accept: 'text/plain' }),
    ]);
    const repo = await repoRes.json();
    return {
        stars: typeof repo.stargazers_count === 'number' ? repo.stargazers_count : null,
        forks: typeof repo.forks_count === 'number' ? repo.forks_count : null,
        updatedAt: repo.pushed_at || repo.updated_at || '',
        version: parseVersionFromReadme(await readmeRes.text()),
        repo: REPO,
        fetchedAt: new Date().toISOString(),
    };
}

function escapeXml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/**
 * GraphQL：拉取近 N 天 contributionCalendar（逻辑对齐 github-readme-activity-graph Fetcher）。
 * 返回 { date: 'DD', count }[]，date 为当月日号（官方 X 轴显示方式）。
 */
async function fetchContributionSeries(username, days, env) {
    const now = Date.now();
    const from = new Date(now - days * 86400000).toISOString();
    const to = new Date(now + 86400000).toISOString();
    const query = `
      query userInfo($LOGIN: String!, $FROM: DateTime!, $TO: DateTime!) {
        user(login: $LOGIN) {
          name
          contributionsCollection(from: $FROM, to: $TO) {
            contributionCalendar {
              weeks {
                contributionDays { contributionCount date }
              }
            }
          }
        }
      }`;
    const headers = {
        'User-Agent': 'WebGIS-Dev-stats-worker/1.0',
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github+json',
    };
    if (env.GITHUB_TOKEN) headers.Authorization = `Bearer ${env.GITHUB_TOKEN}`;
    const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers,
        body: JSON.stringify({ query, variables: { LOGIN: username, FROM: from, TO: to } }),
    });
    if (!res.ok) throw new Error(`graphql -> HTTP ${res.status}`);
    const json = await res.json();
    const weeks =
        json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
    const list = [];
    for (const week of weeks) {
        for (const day of week.contributionDays || []) {
            if (!day?.date) continue;
            const d = new Date(day.date);
            list.push({
                date: String(d.getUTCDate()),
                count: Number(day.contributionCount) || 0,
            });
        }
    }
    // 与官方一致：去掉最后一天为 0 的“今天还没贡献”，再截到 days
    if (list.length && list[list.length - 1].count === 0) list.pop();
    const extra = list.length - days;
    if (extra > 0) list.splice(0, extra);
    return {
        name: json?.data?.user?.name || username,
        contributions: list.length ? list : [{ date: '1', count: 0 }],
    };
}

/** tokyo-night 主题（github-readme-activity-graph styles/themes.ts） */
const TOKYO_NIGHT = {
    areaColor: '70a5fd',
    borderColor: '0000', // hide_border=true
    bgColor: '1a1b27',
    color: '70a5fd',
    titleColor: '70a5fd',
    lineColor: '70a5fd',
    pointColor: 'a9b1d6',
};

/** Chartist CSS（迁移自 graphStyle / graphAnimation，颜色为主题色） */
function chartistCss(colors) {
    return `
    .header {
      font: 600 20px 'Segoe UI', Ubuntu, Sans-Serif;
      text-align: center;
      color: #${colors.titleColor};
      margin-top: 20px;
    }
    svg { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; user-select: none; }
    .ct-label {
      fill: #${colors.color};
      color: #${colors.color};
      font-size: .75rem;
      line-height: 1;
    }
    .ct-grid-background, .ct-line { fill: none; }
    .ct-label.ct-horizontal.ct-start {
      align-items: flex-end; justify-content: flex-start;
      text-align: left; text-anchor: start;
    }
    .ct-label.ct-horizontal.ct-end {
      align-items: flex-start; justify-content: flex-start;
      text-align: left; text-anchor: start;
    }
    .ct-label.ct-vertical.ct-start {
      align-items: flex-end; justify-content: flex-end;
      text-align: right; text-anchor: end;
    }
    .ct-label.ct-vertical.ct-end {
      align-items: flex-end; justify-content: flex-start;
      text-align: left; text-anchor: start;
    }
    .ct-grid {
      stroke: #${colors.color};
      stroke-width: 1px;
      stroke-opacity: 0.3;
      stroke-dasharray: 2px;
    }
    .ct-point {
      stroke-width: 10px;
      stroke-linecap: round;
      stroke: #${colors.pointColor};
      animation: blink 1s ease-in-out forwards;
    }
    .ct-line {
      stroke-width: 4px;
      stroke-dasharray: 5000;
      stroke-dashoffset: 5000;
      stroke: #${colors.lineColor};
      animation: dash 5s ease-in-out forwards;
    }
    .ct-area { stroke: none; fill-opacity: 0.1; }
    .ct-series-a .ct-area { fill: #${colors.areaColor}; }
    @keyframes blink {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes dash {
      to { stroke-dashoffset: 0; }
    }`;
}

/**
 * 迁移 github-readme-activity-graph 绘图逻辑（Card + node-chartist 线图结构）。
 * 1200×420，padding/axis 与官方 GraphCards 一致；CSS 动画同源。
 */
function renderActivityGraphSvg(userDetails, { hideTitle = false, customTitle = '' } = {}) {
    const width = 1200;
    const height = 420;
    const radius = 0;
    const colors = TOKYO_NIGHT;
    const title = hideTitle
        ? ''
        : customTitle ||
          `${userDetails.name || 'user'}'s Contribution Graph`;

    const values = userDetails.contributions.map((d) => d.count);
    const labels = userDetails.contributions.map((d) => d.date);
    const n = values.length;
    const high = Math.max(...values, 1);

    // Chartist 官方 padding / axis（GraphCards.getOptions）
    const padTop = 80;
    const padRight = 50;
    const padBottom = 20;
    const padLeft = 20;
    const axisYOffset = 70;
    const axisXOffset = 50;

    // 绘图区（与 chartist 线图默认布局对齐）
    const x0 = padLeft + axisYOffset;
    const x1 = width - padRight;
    const yTop = padTop;
    const yBot = height - padBottom - axisXOffset;
    const plotW = x1 - x0;
    const plotH = yBot - yTop;

    const xAt = (i) => (n === 1 ? (x0 + x1) / 2 : x0 + (i / (n - 1)) * plotW);
    const yAt = (v) => yBot - (v / high) * plotH;

    // 网格：水平 5 档 + 竖线
    const hGrids = [];
    const yLabels = [];
    for (let g = 0; g <= 4; g++) {
        const t = g / 4;
        const y = yBot - t * plotH;
        const val = Math.round(t * high);
        hGrids.push(
            `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="ct-grid"/>`,
        );
        yLabels.push(
            `<text x="${x0 - 10}" y="${y + 5}" class="ct-label ct-vertical ct-start">${val}</text>`,
        );
    }
    const vGrids = [];
    const xLabels = [];
    for (let i = 0; i < n; i++) {
        const x = xAt(i);
        vGrids.push(
            `<line x1="${x}" y1="${yTop}" x2="${x}" y2="${yBot}" class="ct-grid"/>`,
        );
        // 官方 X 轴标签密集，隔点显示更清晰（仍接近 chartist 全量标签观感）
        if (n <= 35 || i % Math.ceil(n / 31) === 0) {
            xLabels.push(
                `<text x="${x}" y="${yBot + 28}" class="ct-label ct-horizontal ct-end">${escapeXml(labels[i])}</text>`,
            );
        }
    }

    const lineD = values
        .map((v, i) => `${i === 0 ? 'M' : 'L'}${xAt(i).toFixed(2)},${yAt(v).toFixed(2)}`)
        .join(' ');
    const areaD = `${lineD} L${xAt(n - 1).toFixed(2)},${yBot} L${xAt(0).toFixed(2)},${yBot} Z`;

    // Chartist 点：用短 <line class="ct-point">（粗描边圆头）
    const points = values
        .map((v, i) => {
            const x = xAt(i).toFixed(2);
            const y = yAt(v).toFixed(2);
            return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y}" class="ct-point"/>`;
        })
        .join('\n      ');

    const areaEl = area ? `<path d="${areaD}" class="ct-area"/>` : '';

    return `<svg
    width="${width}"
    height="${height}"
    viewBox="0 0 ${width} ${height}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect xmlns="http://www.w3.org/2000/svg" data-testid="card_bg" id="cardBg"
      x="0" y="0" rx="${radius}" height="100%" width="100%" fill="#${colors.bgColor}"
      fill-opacity="1" stroke-opacity="1"
      style="stroke:#${colors.borderColor}; stroke-width:1;"/>
    <style>
      body { font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif; }
      ${chartistCss(colors)}
    </style>
    <foreignObject x="0" y="0" width="${width}" height="50">
      <h1 xmlns="http://www.w3.org/1999/xhtml" class="header">${escapeXml(title)}</h1>
    </foreignObject>
    <g class="ct-grids">
      ${hGrids.join('\n      ')}
      ${vGrids.join('\n      ')}
    </g>
    <g class="ct-labels">
      <text x="${(x0 + x1) / 2}" y="${height - 8}" text-anchor="middle" class="ct-label">Days</text>
      <text x="${padLeft + 8}" y="${padTop - 12}" class="ct-label">Contributions</text>
      ${yLabels.join('\n      ')}
      ${xLabels.join('\n      ')}
    </g>
    <g class="ct-series ct-series-a">
      ${areaEl}
      <path d="${lineD}" class="ct-line"/>
    </g>
    <g class="ct-series-a">
      ${points}
    </g>
  </svg>`;
}

const area = true; // 默认面积图（等同 ?area=true）

async function handleActivityGraphSvg(request, env, ctx) {
    const url = new URL(request.url);
    const username = (url.searchParams.get('username') || REPO.split('/')[0]).trim();
    const days = Math.min(90, Math.max(7, Number(url.searchParams.get('days')) || 31));
    const key = new Request(
        `https://webgis-stats.internal/api/activity-graph.svg?u=${username}&d=${days}`,
    );
    const hit = await cachedResponse(key, 'HIT');
    if (hit) return hit;
    try {
        const userDetails = await fetchContributionSeries(username, days, env);
        const svg = renderActivityGraphSvg(userDetails, {
            hideTitle: url.searchParams.get('hide_title') === 'true',
            customTitle: url.searchParams.get('custom_title') || '',
        });
        const res = new Response(svg, {
            status: 200,
            headers: {
                'Content-Type': 'image/svg+xml; charset=utf-8',
                'Cache-Control': `public, max-age=${CHART_CACHE_TTL}`,
                ...corsHeaders(),
                'X-Cache-Status': 'MISS',
            },
        });
        putCache(key, res, ctx);
        return res;
    } catch (error) {
        return jsonResponse(
            { error: 'activity graph unavailable', detail: String((error && error.message) || error) },
            502,
            { 'Cache-Control': 'no-store', 'X-Cache-Status': 'ERROR' },
        );
    }
}

async function cachedResponse(cacheKey, cacheStatus) {
    try {
        const cached = await caches.default.match(cacheKey);
        if (!cached) return null;
        const hit = new Response(cached.body, cached);
        hit.headers.set('X-Cache-Status', cacheStatus);
        return hit;
    } catch {
        return null; // 缓存不可用时降级为直接回源，绝不因此 500
    }
}

function putCache(cacheKey, response, ctx) {
    try {
        ctx.waitUntil(caches.default.put(cacheKey, response.clone()).catch(() => {}));
    } catch {
        /* 无 ctx（如极端环境）则跳过缓存 */
    }
}

async function handleStats(_request, env, ctx) {
    const key = statsCacheKey();
    const hit = await cachedResponse(key, 'HIT');
    if (hit) return hit;
    try {
        const stats = await buildStats(env);
        const res = jsonResponse(stats, 200, {
            'Cache-Control': `public, max-age=${STATS_CACHE_TTL}`,
            'X-Cache-Status': 'MISS',
        });
        putCache(key, res, ctx);
        return res;
    } catch (error) {
        return jsonResponse(
            { error: 'upstream unavailable', detail: String((error && error.message) || error) },
            502,
            { 'Cache-Control': 'no-store', 'X-Cache-Status': 'ERROR' },
        );
    }
}

async function handleChart(_request, env, ctx) {
    const sealedToken = env.STAR_HISTORY_SEALED_TOKEN || DEFAULT_SEALED_TOKEN;
    const chartUrl =
        `https://api.star-history.com/chart?repos=${REPO}` +
        `&type=timeline&legend=top-left&sealed_token=${sealedToken}`;
    return fetchImageCached(chartCacheKey(), chartUrl, CHART_CACHE_TTL, 'chart', ctx);
}

async function handleSnake(variant, _request, _env, ctx) {
    const upstreamUrl =
        variant === 'snake-dark' ? `${SNAKE_BASE_URL}/snake-dark.svg` : `${SNAKE_BASE_URL}/snake.svg`;
    return fetchImageCached(snakeCacheKey(variant), upstreamUrl, SNAKE_CACHE_TTL, 'snake', ctx);
}

// 通用图片代理（固定上游 + 边缘缓存）：chart / snake 共用
async function fetchImageCached(cacheKey, upstreamUrl, ttlSeconds, label, ctx) {
    const hit = await cachedResponse(cacheKey, 'HIT');
    if (hit) return hit;
    try {
        const upstream = await fetch(upstreamUrl, {
            headers: { 'User-Agent': 'WebGIS-Dev-stats-worker/1.0' },
        });
        if (!upstream.ok) throw new Error(`${label} upstream -> HTTP ${upstream.status}`);
        const res = new Response(upstream.body, {
            status: 200,
            headers: {
                'Content-Type': upstream.headers.get('Content-Type') || 'image/svg+xml',
                'Cache-Control': `public, max-age=${ttlSeconds}`,
                ...corsHeaders(),
                'X-Cache-Status': 'MISS',
            },
        });
        putCache(cacheKey, res, ctx);
        return res;
    } catch (error) {
        return jsonResponse(
            { error: `${label} upstream unavailable`, detail: String((error && error.message) || error) },
            502,
            { 'Cache-Control': 'no-store', 'X-Cache-Status': 'ERROR' },
        );
    }
}

export default {
    async fetch(request, env, ctx) {
        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: corsHeaders() });
        }
        const url = new URL(request.url);
        if (request.method === 'GET' && url.pathname === '/api/stats') {
            return handleStats(request, env, ctx);
        }
        if (
            request.method === 'GET' &&
            (url.pathname === '/api/activity-graph.svg' || url.pathname === '/api/activity-graph')
        ) {
            return handleActivityGraphSvg(request, env, ctx);
        }
        if (request.method === 'GET' && (url.pathname === '/api/chart' || url.pathname === '/chart')) {
            return handleChart(request, env, ctx);
        }
        if (request.method === 'GET' && (url.pathname === '/api/snake' || url.pathname === '/api/snake-dark')) {
            return handleSnake(url.pathname.slice(5), request, env, ctx); // 'snake' / 'snake-dark'
        }
        return jsonResponse(
            {
                error: 'Not found',
                usage: [
                    'GET /api/stats',
                    'GET /api/activity-graph.svg?username=NEGIAO',
                    'GET /api/chart',
                    'GET /api/snake',
                    'GET /api/snake-dark',
                ],
            },
            404,
            { 'Cache-Control': 'no-store' },
        );
    },

    // 定时暖缓存（wrangler.toml crons）：保证用户永远命中热缓存，面试展示零等待
    async scheduled(_event, env, ctx) {
        ctx.waitUntil(
            (async () => {
                try {
                    const stats = await buildStats(env);
                    await caches.default.put(
                        statsCacheKey(),
                        jsonResponse(stats, 200, {
                            'Cache-Control': `public, max-age=${STATS_CACHE_TTL}`,
                            'X-Cache-Status': 'WARMED',
                        }),
                    );
                } catch (error) {
                    console.log(`scheduled warm failed: ${(error && error.message) || error}`);
                }
            })(),
        );
    },
};
