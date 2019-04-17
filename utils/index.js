const path = require('path')

export const resolve = dir => {
  return path.join(__dirname, dir)
}