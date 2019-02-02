import React from 'react'
import { PostType } from '../types'

export default function Post({ post } : { post: PostType }) {
  return (
    <div>
      {post.title}
    </div>
  )
}
