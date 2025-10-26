import type { Post } from '@entities/post/model'

import { createPostLinkProps, resolveExternalUrl } from './index'

describe('posts/open-external model', () => {
  const localPost: Post = {
    title: 'Local',
    date: '2024-01-01',
    content: '',
    filename: 'local-post',
    tags: [],
  }

  const externalUrl = 'https://example.com'
  const externalPost: Post = {
    title: 'External',
    date: '2024-01-02',
    content: '',
    filename: 'note__aHR0cHM6Ly9leGFtcGxlLmNvbQ',
    tags: [],
  }

  test('resolveExternalUrl returns null for local post', () => {
    expect(resolveExternalUrl(localPost)).toBeNull()
  })

  test('resolveExternalUrl returns url for external post', () => {
    expect(resolveExternalUrl(externalPost)).toBe(externalUrl)
  })

  test('createPostLinkProps returns internal href when not external', () => {
    const props = createPostLinkProps(localPost)
    expect(props).toEqual({ href: '/posts/local-post', externalUrl: null })
  })

  test('createPostLinkProps returns external href when external', () => {
    const props = createPostLinkProps(externalPost)
    expect(props).toEqual({ href: externalUrl, externalUrl })
  })
})
