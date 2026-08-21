/* eslint-disable @typescript-eslint/no-require-imports */
const stripBom = require('./postcss-strip-bom.cjs')

module.exports = {
  plugins: [stripBom(), require('@tailwindcss/postcss')()],
}
