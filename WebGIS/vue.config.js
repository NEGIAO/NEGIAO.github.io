// vue.config.js
module.exports = {
    // 部署应用包时的基本 URL。
    // 它通常被用于部署到非根路径。
    // 例如，如果你将你的应用部署到 https://<USERNAME>.github.io/<REPO>/
    // 那么 publicPath 就是 '/<REPO>/'
    publicPath: process.env.NODE_ENV === 'production'
      ? '/WebGIS/' // 例如：'/my-vue-project/'
      : '/',
    outputDir: 'WebGIS', // 确保你的打包输出目录是 'WebGIS'
  };