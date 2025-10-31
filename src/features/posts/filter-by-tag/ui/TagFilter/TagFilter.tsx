'use client'

import { useEffect, useMemo, useState } from 'react'

import { Badge } from '@/shared/ui'
import { Posts } from '@/entities/post'
import { createPostLinkProps } from '@/features/posts/open-external'

import type { Post } from '@/shared/types/post'

import { filterPostsByTag, type TagStats } from '../../model'

const NOT_SELECTED_CLASS = 'opacity-50'

type TagFilterProps = {
  posts: Post[]
  tags: string[]
  initialTag: string
  tagStats: TagStats
}

export const TagFilter = ({
  posts,
  tags,
  initialTag,
  tagStats,
}: TagFilterProps) => {
  const [selectedTag, setSelectedTag] = useState(initialTag)

  useEffect(() => {
    setSelectedTag(initialTag)
  }, [initialTag])

  const filteredPosts = useMemo(() => {
    if (!selectedTag) return []
    return filterPostsByTag(posts, selectedTag).map((post) => ({
      ...post,
      ...createPostLinkProps(post),
    }))
  }, [posts, selectedTag])

  if (tags.length === 0) {
    return <p className="text-sm text-gray-500">タグがありません。</p>
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            title={`${tag} (${tagStats[tag] ?? 0})`}
            className={tag === selectedTag ? undefined : NOT_SELECTED_CLASS}
          >
            <Badge text={tag} />
          </button>
        ))}
      </div>
      <div>
        <Posts posts={filteredPosts} />
      </div>
    </div>
  )
}
