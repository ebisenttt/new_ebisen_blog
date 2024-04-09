import { remark } from 'remark'
import remarkEmbedder from '@remark-embedder/core'
import html from 'remark-html'
import { CodePenTransformer } from 'lib/embedInMarkdown'
import gfm from 'remark-gfm'

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkEmbedder, {
      transformers: [CodePenTransformer],
    })
    .use(gfm)
    .use(html, { sanitize: false })
    .process(markdown)
  return result.toString()
}
