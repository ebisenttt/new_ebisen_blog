import stripBom from './postcss-strip-bom.mjs'
import tailwindPostcss from '@tailwindcss/postcss'

export default {
  plugins: [stripBom(), tailwindPostcss()],
}
