import { backQuoteToCodeElement } from '@/utils/backQuoteToCodeElement'

describe('backQuoteToCodeElement', () => {
  test('バッククォートで囲まれた文字列がcode要素に変換される', () => {
    const result = backQuoteToCodeElement('`test`')
    expect(result).toBe('<code>test</code>')
  })
})
