import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ''
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => {
        this.setState({ hasError: true, errorMessage: error.message });
      });
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMessage: error.toString() });
    alert(`An error occurred: ${error.toString()}`);
  }

  render() {
    const { posts, hasError, errorMessage } = this.state;

    if (hasError) {
      return <div style={{ color: "red" }}>Error: {errorMessage}</div>;
    }

    return (
      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <div key={post.id} style={{ marginBottom: '20px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
