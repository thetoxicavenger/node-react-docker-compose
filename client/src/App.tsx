import React from 'react'
import PostsList from './components/PostsList'
import { PostsListType } from './types'

type StateType = {
  posts: PostsListType;
  loading: boolean;
  error: boolean;
}

export default class App extends React.Component<{}, StateType> {
  state : StateType = {
    posts: [],
    loading: false,
    error: false
  }
  componentDidMount = () => {
    this.getPosts()
  }
  getPosts = async () => {
    this.setState({ loading: true })
    try {
      const res = await fetch('api/posts')
      if (!res.ok) {
        throw new Error('Bad response code from the API while fetching posts.')
      }
      const {data} = await res.json()
      this.setState({ posts: data, error: false, loading: false })
    } catch (e) {
      console.log(e)
      this.setState({
        error: true,
        loading: false
      })
    }
  }
  render() {
    return (
      <div>
        ballsz
        {this.state.posts.length && <PostsList posts={this.state.posts} />}
      </div>
    )
  }
}
