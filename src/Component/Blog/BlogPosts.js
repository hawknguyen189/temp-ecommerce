import React from "react";
import { Link } from "react-router-dom";
import "./BlogPosts.scss";
import { _truncate } from "../CommonUse/Utils";

const BlogPosts = ({ blogdata, className, contentClass, imgClass }) => {
  return (
    <div className={className}>
      <Link to={`/blog/post/${blogdata.fields.slug}`}>
        <img
          className={`${imgClass}`}
          src={"https:" + blogdata.fields.image.fields.file.url} //blog return object image not array
          alt="entry display"
        />
      </Link>
      <div className={contentClass}>
        <time className="blog-date" dateTime={blogdata.fields.publishDate}>
          {blogdata.fields.publishDate}
        </time>
        <Link to={`/blog/post/${blogdata.fields.slug}`}>
          <h4 className="blog-title">{blogdata.fields.title}</h4>
        </Link>
        <p className="blog-content">
          {_truncate.apply(blogdata.fields.description, [80, true])}
        </p>
        <Link className="blog-more" to={`/blog/post/${blogdata.fields.slug}`}>
          / READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogPosts;
