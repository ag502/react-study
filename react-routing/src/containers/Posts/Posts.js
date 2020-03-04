import React, { Component } from "react";
import "./Posts.css";
import axios from "../../axios";
import Post from "../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import { Route } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        console.log("test");
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Max"
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch(error => {
        // console.log(error);
      });
  }

  postSelectedHandler = id => {
    this.props.history.push({ pathname: `${this.props.match.url}/${id}` });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          exact
          path={`${this.props.match.url}/:id`}
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
