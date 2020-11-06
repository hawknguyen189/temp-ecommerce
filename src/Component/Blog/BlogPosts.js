import React from "react";
import { Link } from "react-router-dom";
import "./BlogPosts.scss";
import { _truncate } from "../CommonUse/Utils";

const BlogPosts = ({
  blogdata,
  className,
  contentClass,
  imgClass,
  imgContainer,
}) => {
  return (
    <div className={className}>
      <div className={imgContainer}>
        <Link to={`/blog/post/${blogdata.fields.slug}`}>
          <img
            className={`${imgClass}`}
            src={"https:" + blogdata.fields.image.fields.file.url} //blog return object image not array
            alt="entry display"
          />
        </Link>
      </div>
      <div className={contentClass}>
        <div className="blog-date">
          <i className="far fa-calendar-alt"></i>{" "}
          <time dateTime={blogdata.fields.publishDate}>
            {blogdata.fields.publishDate}
          </time>
        </div>
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
