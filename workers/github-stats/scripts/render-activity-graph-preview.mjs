/**
 * 预览：与 Worker 同源的 Chartist 风格活动图（tokyo-night / 31 天 mock）。
 * node workers/github-stats/scripts/render-activity-graph-preview.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function escapeXml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

const TOKYO_NIGHT = {
    areaColor: '70a5fd',
    borderColor: '0000',
    bgColor: '1a1b27',
    color: '70a5fd',
    titleColor: '70a5fd',
    lineColor: '70a5fd',
    pointColor: 'a9b1d6',
};

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

function renderActivityGraphSvg(userDetails, { hideTitle = false, customTitle = '' } = {}) {
    const width = 1200;
    const height = 420;
    const radius = 0;
    const colors = TOKYO_NIGHT;
    const title = hideTitle ? '' : customTitle || `${userDetails.name || 'user'}'s Contribution Graph`;
    const values = userDetails.contributions.map((d) => d.count);
    const labels = userDetails.contributions.map((d) => d.date);
    const n = values.length;
    const high = Math.max(...values, 1);
    const padTop = 80;
    const padRight = 50;
    const padBottom = 20;
    const padLeft = 20;
    const axisYOffset = 70;
    const axisXOffset = 50;
    const x0 = padLeft + axisYOffset;
    const x1 = width - padRight;
    const yTop = padTop;
    const yBot = height - padBottom - axisXOffset;
    const plotW = x1 - x0;
    const plotH = yBot - yTop;
    const xAt = (i) => (n === 1 ? (x0 + x1) / 2 : x0 + (i / (n - 1)) * plotW);
    const yAt = (v) => yBot - (v / high) * plotH;
    const hGrids = [];
    const yLabels = [];
    for (let g = 0; g <= 4; g++) {
        const t = g / 4;
        const y = yBot - t * plotH;
        const val = Math.round(t * high);
        hGrids.push(`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" class="ct-grid"/>`);
        yLabels.push(
            `<text x="${x0 - 10}" y="${y + 5}" class="ct-label ct-vertical ct-start">${val}</text>`,
        );
    }
    const vGrids = [];
    const xLabels = [];
    for (let i = 0; i < n; i++) {
        const x = xAt(i);
        vGrids.push(`<line x1="${x}" y1="${yTop}" x2="${x}" y2="${yBot}" class="ct-grid"/>`);
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
    const points = values
        .map((v, i) => {
            const x = xAt(i).toFixed(2);
            const y = yAt(v).toFixed(2);
            return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y}" class="ct-point"/>`;
        })
        .join('\n      ');
    const areaEl = `<path d="${areaD}" class="ct-area"/>`;

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

const contributions = [];
for (let day = 1; day <= 31; day++) {
    const count = Math.max(0, Math.round(6 + Math.sin(day / 2.2) * 5 + ((day * 17) % 9)));
    contributions.push({ date: String(day), count });
}

const svg = renderActivityGraphSvg({ name: 'NEGIAO', contributions });
const outDir = join(__dirname, '../preview');
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, 'activity-graph-sample.svg');
writeFileSync(outFile, svg, 'utf8');
console.log('wrote', outFile);
