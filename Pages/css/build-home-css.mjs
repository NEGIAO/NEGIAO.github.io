// 一次性构建脚本:把首页 7 个 CSS 按序拼接为 home.css
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const order = ['base.css','components.css','layout.css','hero.css','projects.css','responsive.css','index.css'];
let out = `/**
 * home.css - 首页合并样式（构建产物，勿手改）
 * 由 base/components/layout/hero/projects/responsive/index 按序拼接生成
 * 改动源文件后重跑 Pages/css/build-home-css.mjs
 */
`;
for (const f of order) {
  let css = fs.readFileSync(path.join(dir, f), 'utf8');
  css = css.replace(/^\/\*\*[\s\S]*?\*\/\s*/, '');
  out += `\n/* ======== ${f} ======== */\n` + css.trim() + '\n';
}
fs.writeFileSync(path.join(dir, 'home.css'), out);
console.log('home.css written:', (out.length / 1024).toFixed(1), 'KB');
