import React, { Component } from "react";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import FullPost from "../FullPost/FullPost";
import "./Blog.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Home
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
          <Route exact path="/" component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route exact path="/:id" component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
