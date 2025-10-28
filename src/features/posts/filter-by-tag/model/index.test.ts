import type { Post } from '@shared/types/post'

import {
  collectTagStats,
  sortTagsByCount,
  filterPostsByTag,
  selectInitialTag,
} from './index'

describe('posts/filter-by-tag model', () => {
  const posts: Post[] = [
    {
      title: 'A',
      date: '2024-01-01',
      content: '',
      filename: 'a',
      tags: ['javascript', 'react'],
    },
    {
      title: 'B',
      date: '2024-01-02',
      content: '',
      filename: 'b',
      tags: ['react'],
    },
    {
      title: 'C',
      date: '2024-01-03',
      content: '',
      filename: 'c',
      tags: undefined,
    },
  ]

  test('collectTagStats aggregates tag counts', () => {
    const stats = collectTagStats(posts)
    expect(stats).toEqual({ javascript: 1, react: 2 })
  })

  test('sortTagsByCount sorts by count desc then name asc', () => {
    const sorted = sortTagsByCount({ react: 2, javascript: 2, astro: 1 })
    expect(sorted).toEqual(['javascript', 'react', 'astro'])
  })

  test('filterPostsByTag returns posts that include the tag', () => {
    const filtered = filterPostsByTag(posts, 'react')
    expect(filtered.map((post) => post.filename)).toEqual(['a', 'b'])
  })

  test('filterPostsByTag returns empty array when tag not provided', () => {
    expect(filterPostsByTag(posts, '')).toEqual([])
  })

  test('selectInitialTag returns first tag or empty string', () => {
    expect(selectInitialTag(['react'])).toBe('react')
    expect(selectInitialTag([])).toBe('')
  })
})
