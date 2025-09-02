/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = 'demo' // e.g. 'my-next-app'

module.exports = {
  output: 'export',                  // 生成静态站点到 out/
  images: { unoptimized: true },     // GitHub Pages 不支持 Next Image 优化
  basePath: isProd ? `/${repo}` : '',   // 非自定义域名时必填
  assetPrefix: isProd ? `/${repo}/` : '',
}
