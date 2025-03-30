import markdownToHtml from '@/lib/markdownToHtml'

describe('markdownToHtml', () => {
  it('should convert markdown to html', async () => {
    const markdown = [
      '# Hello, world!',
      '## this is h2',
      '### this is h3',
      '#### this is h4',
      '##### this is h5',
      '###### this is h6',
      'this is a paragraph',
      '',
      'https://codepen.io/ebisenttt/pen/gOqXMrR',
    ].join('\n')
    const result = await markdownToHtml(markdown)
    expect(result).toContain('<h1>Hello, world!</h1>')
    expect(result).toContain('<h2>this is h2</h2>')
    expect(result).toContain('<h3>this is h3</h3>')
    expect(result).toContain('<h4>this is h4</h4>')
    expect(result).toContain('<h5>this is h5</h5>')
    expect(result).toContain('<h6>this is h6</h6>')
    expect(result).toContain('<p>this is a paragraph</p>')
    expect(result).toContain(
      '<iframe src="https://codepen.io/ebisenttt/embed/gOqXMrR',
    )
  })
})
