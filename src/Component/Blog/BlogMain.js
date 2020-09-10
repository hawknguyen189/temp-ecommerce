import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogsContext } from "../Context/BlogsContext";
import { _truncate } from "../CommonUse/Utils";
import { useRouter } from "../CommonUse/CustomHooks";
import { useState } from "react";

const BlogMain = () => {
  const { blog } = useContext(BlogsContext);
  const router = useRouter();
  let blogArray = [];
  if (blog) {
    if (router.query.category.toUpperCase() === "ALL") {
      blogArray = [...blog];
    } else {
      blogArray = blog.filter((e) => {
        return e.fields.categories.find((element) => {
          return element.toUpperCase() === router.query.category.toUpperCase();
        });
      });
    }
  }
  return (
    <div className="blog-section container">
      {blogArray &&
        blogArray.map((e, index) => {
          return (
            <div
              className="row mb-5 pb-3 border-bottom justify-content-center"
              key={index}
            >
              <Link to={`/blog/post/${e.fields.slug}`}>
                <img
                  className={`img-fluid`}
                  src={"https:" + e.fields.image.fields.file.url} //blog return object image not array
                  alt="entry display"
                />
              </Link>
              <div className="blog-info">
                <Link to={`/blog/post/${e.fields.slug}`}>
                  <h4 className="blog-title pt-3">{e.fields.title}</h4>
                </Link>
                <time className="blog-date" dateTime={e.fields.publishDate}>
                  {e.fields.publishDate}
                </time>
                <p className="blog-content">
                  {_truncate.apply(e.fields.description, [300, true])}
                </p>
                <Link className="blog-more" to={`/blog/post/${e.fields.slug}`}>
                  / READ MORE
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogMain;
