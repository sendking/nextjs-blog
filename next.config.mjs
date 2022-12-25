/** @type {import('next').NextConfig} */

import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'

const config = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}

export default config
