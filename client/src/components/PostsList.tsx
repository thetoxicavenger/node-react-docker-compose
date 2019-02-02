import React from 'react'
import {PostsListType} from '../types'
import Post from './Post'

const PostsList = ({ posts } : { posts: PostsListType }) => {
    return (
        <>
            {posts.map(post => {
                return <Post key={post.id} post={post} />
            })}
        </>
    )
}

export default PostsList