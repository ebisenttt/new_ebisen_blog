import type { Post } from '@shared/types/post'

import { decodeExternalUrl } from '@entities/post/model'

export function resolveExternalUrl(post: Post): string | null {
  return decodeExternalUrl(post.filename)
}

export function createPostLinkProps(post: Post): {
  href: string
  externalUrl: string | null
} {
  const externalUrl = resolveExternalUrl(post)
  if (externalUrl) {
    return { href: externalUrl, externalUrl }
  }
  return { href: `/posts/${post.filename}`, externalUrl: null }
}
