import { backQuoteToCodeElement } from './backQuoteToCodeElement'

describe('backQuoteToCodeElement', () => {
  it('wraps text within backquotes with code tags', () => {
    const markdown = 'This is a `code` snippet.'

    expect(backQuoteToCodeElement(markdown)).toBe(
      'This is a <code>code</code> snippet.',
    )
  })

  it('leaves text without backquotes unchanged', () => {
    const markdown = 'This text has no code snippets.'

    expect(backQuoteToCodeElement(markdown)).toBe(markdown)
  })
})
