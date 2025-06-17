// htmlからタグを除去してテキストのみを取得する
export function getRawTextsFromHtml(html: string) {
  return html.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '').slice(0, 100)
}
