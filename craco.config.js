const path = require('path')

// __dirname：当前目录，当前目录拼接上dir
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
    },
  },
}
