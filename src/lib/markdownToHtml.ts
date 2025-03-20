import { unified } from 'unified'
import html from 'remark-html'
import gfm from 'remark-gfm'
import parse from 'remark-parse'
import remarkEmbedder from '@remark-embedder/core'

import { CodePenTransformer } from '@/lib/embedInMarkdown'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkEmbedder, {
      transformers: [CodePenTransformer],
    })
    .use(parse)
    .use(gfm)
    .use(html, { sanitize: false })
    .process(markdown)
  return result.toString()
}
