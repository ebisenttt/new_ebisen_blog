import { remark } from 'remark'
import remarkEmbedder from '@remark-embedder/core'
import { CodePenTransformer } from './embedInMarkdown'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkEmbedder, {
      transformers: [CodePenTransformer],
    })
    .use(html, { sanitize: false })
    .process(markdown)
  return result.toString()
}
