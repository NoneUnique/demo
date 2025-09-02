/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 构建时忽略 ESLint 错误
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  // 删除 assetPrefix
  trailingSlash: true, // 添加这个，确保URL以斜杠结尾
};

module.exports = nextConfig;
