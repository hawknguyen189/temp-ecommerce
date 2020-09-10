import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import PageTitle from "../Component/CommonUse/PageTitle";
import BlogSide from "../Component/Blog/BlogSide";
import BlogMain from "../Component/Blog/BlogMain";
import BlogDetail from "../Component/Blog/BlogDetail";

const BlogPage = () => {
  return (
    <div id="blogPage">
      <PageTitle pageInfo="Blog"></PageTitle>
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-9">
            <Switch>
              <Route exact path="/blog/:category">
                <BlogMain></BlogMain>
              </Route>
              <Route exact path="/blog/post/:slug">
                <BlogDetail></BlogDetail>
              </Route>
            </Switch>
          </div>
          <BlogSide></BlogSide>
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
