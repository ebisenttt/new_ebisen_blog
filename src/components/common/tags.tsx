'use client'

import { useState } from 'react'

import type { Post } from '@/types/post'

import { Badge } from './badge'
import { Posts } from '../post/posts'

type TagsProps = {
  allTags: string[]
  allPosts: Post[]
}

export const Tags = ({ allTags, allPosts }: TagsProps) => {
  const [selectedTag, setSelectedTag] = useState<string>(allTags[0])

  const filteredPosts = allPosts.filter((post) =>
    post.tags?.includes(selectedTag),
  )
  const notSelectedTagButtonClass = 'opacity-50'

  const onBadgeClick = (tag: string) => {
    setSelectedTag(tag)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              onBadgeClick(tag)
            }}
            className={
              tag === selectedTag ? undefined : notSelectedTagButtonClass
            }
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
