'use client'
import { useEffect } from 'react'

import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markup'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/show-language/prism-show-language'

export function PageClient() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return null
}
