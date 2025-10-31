export const backQuoteToCodeElement = (markdown: string): string => {
  return markdown.replace(/`([^`]+)`/g, '<code>$1</code>')
}
