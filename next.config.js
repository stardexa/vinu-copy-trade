/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const path = require('path')

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}