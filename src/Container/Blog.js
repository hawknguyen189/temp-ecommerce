import React from "react";
import BlogPosts from "../Component/Blog/BlogPosts";
import SectionTitle from "../Component/CommonUse/SectionTitle";
import BlogData from "../Component/Blog/BlogData";
let mainBlog;
let sideBlog;
mainBlog = BlogData.filter(element => {
  return element.mainBlog === true;
});
sideBlog = BlogData.filter(element => {
  return element.mainBlog === false;
});
const Blog = () => {
  return (
    // start off blog section
    <section id="blogSection" className="container mt-5 mb-5">
      <SectionTitle
        title="FROM OUR BLOG"
        desc="-Keep updated with us-"
      ></SectionTitle>
      <div className="row">
        <div className="col-lg main-blog pr-sm-5">
          <BlogPosts
            blogdata={mainBlog[0]}
            className=""
            contentClass="mt-3"
            imgClass="img-fluid rounded"
          ></BlogPosts>
        </div>
        <div className="col-lg side-blog pl-sm-5">
          {sideBlog.map((value, index) => {
            return (
              <BlogPosts
                blogdata={value}
                className="row mb-5 align-items-center"
                contentClass="col-sm"
                imgClass="col-sm-6 rounded side-blog-img"
                key={index}
              ></BlogPosts>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
