import React, { Component } from "react";
import Posts from "../Posts/Posts";
// import NewPost from "../NewPost/NewPost";
import asyncComponent from "../../hoc/asyncComponent";
import "./Blog.css";
import { Switch, Route, Link, NavLink, Redirect } from "react-router-dom";

const AsyncNewPost = asyncComponent(() => {
  return import("../NewPost/NewPost");
});

class Blog extends Component {
  state = {
    auth: true
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
                {/* <a href="/">Home</a> */}
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
                {/* <a href="/new-post">New Post</a> */}
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route exact path="/" render={() => <Posts />} /> */}
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
