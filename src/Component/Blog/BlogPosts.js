import React from "react";
import "./BlogPosts.scss";
import { _truncate } from "../CommonUse/Utils";

const BlogPosts = props => {
  return (
    <div className={props.className}>
      <img
        className={`${props.imgClass}`}
        src={require(`../../media/blogs/${props.blogdata.imgURL}`)}
        alt="entry display"
      />
      <div className={props.contentClass}>
        <p className="blog-date">{props.blogdata.publishedDate}</p>
        <a href="">
          <h4 className="blog-title">{props.blogdata.title}</h4>
        </a>
        <p className="blog-content">
          {_truncate.apply(props.blogdata.content, [48, true])}
        </p>
        <a className="blog-more" href="#">/ READ MORE</a>
      </div>
    </div>
  );
};

export default BlogPosts;
