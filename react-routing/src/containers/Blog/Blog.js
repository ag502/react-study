import React, { Component } from "react";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import "./Blog.css";
import { Switch, Route, Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                {/* <a href="/">Home</a> */}
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>
                {/* <a href="/new-post">New Post</a> */}
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route exact path="/" render={() => <Posts />} /> */}
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/new-post" component={NewPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
