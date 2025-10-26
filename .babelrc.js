module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'prismjs',
      {
        languages: ['js', 'css', 'html', 'bash', 'json'],
        plugins: ['line-numbers', 'show-language'],
        theme: 'okaidia',
        css: true,
      },
    ],
  ],
}
