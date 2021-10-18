import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3006/contacts`)
      .then(res => {
        this.setState({ 
          posts: res.data 
        });
        console.log(res.data)
      })
  }

  handleDelete = (id, e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3006/contacts/${id}`)
      .then(res => {
        console.log(res)

        const posts = this.state.posts.filter(post => post.id !== id);  
        this.setState({ posts });  
      })
  }


  render() {
    const {posts} = this.state

    return (
      <ul>
        { posts.map(post => 
          <li key={post.id}>{post.title} - {post.body} <button type="button" onClick={(e) => this.handleDelete(post.id, e)}>Delete</button></li>
        )}
      </ul>
    )
  }
}