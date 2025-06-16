'use client'
import { useEffect } from 'react'

import Prism from 'prismjs'

export function PageClient() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return null
}
