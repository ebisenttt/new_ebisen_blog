/**
 * ESLint custom rule: component-structure
 *
 * コンポーネントのディレクトリ構成を検証します:
 * - ComponentName.tsx
 * - ComponentName.stories.tsx (interaction tests via play functions)
 * - index.ts
 *
 * @see docs/ai/guides/component-structure.md
 */

import { existsSync } from 'node:fs'
import { dirname, basename, join } from 'node:path'

export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Ensure UI components follow the required 3-file structure',
      category: 'Best Practices',
      recommended: true,
    },
    messages: {
      missingStoriesFile:
        'Missing {{componentName}}.stories.tsx file. All components must have a stories file.',
      missingIndexFile:
        'Missing index.ts file. Component directory must have an index.ts.',
    },
    schema: [],
  },

  create(context) {
    const filename = context.filename

    // src/**/ui/**/*.tsx 配下のコンポーネントファイルのみ対象
    if (
      !filename.includes('/ui/') ||
      !filename.endsWith('.tsx') ||
      filename.endsWith('.test.tsx') ||
      filename.endsWith('.stories.tsx')
    ) {
      return {}
    }

    // shared/entities/features/widgets/processes/pages配下のみ対象
    const validLayers = [
      '/shared/',
      '/entities/',
      '/features/',
      '/widgets/',
      '/processes/',
      '/pages/',
    ]
    if (!validLayers.some((layer) => filename.includes(layer))) {
      return {}
    }

    return {
      Program(node) {
        const dir = dirname(filename)
        const fileBasename = basename(filename, '.tsx')
        const componentName = basename(dir)

        // コンポーネント名とファイル名が一致するかチェック
        // （ComponentName/ComponentName.tsx パターン）
        if (fileBasename !== componentName) {
          return
        }

        const storiesFile = join(dir, `${componentName}.stories.tsx`)
        const indexFile = join(dir, 'index.ts')

        // stories.tsx の存在チェック
        if (!existsSync(storiesFile)) {
          context.report({
            node,
            messageId: 'missingStoriesFile',
            data: { componentName },
          })
        }

        // index.ts の存在チェック
        if (!existsSync(indexFile)) {
          context.report({
            node,
            messageId: 'missingIndexFile',
            data: { componentName },
          })
        }
      },
    }
  },
}
