import React, { useContext, useState } from "react";
import BlogPosts from "../Component/Blog/BlogPosts";
import SectionTitle from "../Component/CommonUse/SectionTitle";
import { BlogsContext } from "../Component/Context/BlogsContext";
import { useEffect } from "react";

const Blog = () => {
  const { blog } = useContext(BlogsContext);
  const [mainBlog, setMainBlog] = useState("");
  useEffect(() => {
    if (blog) {
      setMainBlog(blog.filter((e) => e.fields.mainPage === true));
    }
  }, [blog]);
  return (
    // start off blog section
    <section id="blogSection" className="container mt-5 mb-5">
      <SectionTitle
        title="FROM OUR BLOG"
        desc="-Keep updated with us-"
      ></SectionTitle>
      {mainBlog && (
        <div className="row">
          {/* check if blog is on main page
          only work if mainBlog is not array */}
          <div className="col-lg main-blog pr-sm-5">
            <BlogPosts
              blogdata={mainBlog[0]}
              className=""
              contentClass="mt-3"
              imgClass="img-fluid rounded"
              imgContainer=""
            ></BlogPosts>
          </div>
          <div className="col-lg side-blog pl-sm-5">
            {mainBlog.slice(1).map((e, index) => {
              return (
                <BlogPosts
                  blogdata={e}
                  className="row mb-5 align-items-center"
                  contentClass="col-sm"
                  imgClass="rounded img-fluid"
                  imgContainer="col-sm"
                  key={index}
                ></BlogPosts>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
export default Blog;
