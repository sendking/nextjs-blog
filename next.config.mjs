/** @type {import('next').NextConfig} */

import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'

export default {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}
