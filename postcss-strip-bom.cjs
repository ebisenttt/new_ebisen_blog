// Strip UTF-8 BOM (U+FEFF) that Turbopack's CSS parser rejects.
// Needed because devicon.min.css ships with a BOM character.
module.exports = () => ({
  postcssPlugin: 'postcss-strip-bom',
  Once(root) {
    if (root.source?.input?.hasBOM) {
      root.source.input.hasBOM = false
    }
  },
})
module.exports.postcss = true
