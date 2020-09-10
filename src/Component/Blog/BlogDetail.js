import React, { useContext } from "react";
import { BlogsContext } from "../Context/BlogsContext";
import { useRouter } from "../CommonUse/CustomHooks";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer"; this can be used to convert rich text
import ReactMarkdown from "react-markdown"; //use to convert markdown format from contentful

const BlogDetail = () => {
  const { blog } = useContext(BlogsContext);
  const router = useRouter();
  let blogPost;
  if (blog) {
    console.log("blog response here ", blog);
    console.log("blog query ", router.query.slug);
    blogPost = blog.find((e) => e.fields.slug === router.query.slug);
    console.log("blog data ", blogPost);
  }

  return (
    <div>
      {blogPost && (
        <article className="row justify-content-center post-detail">
          <img
            src={"https:" + blogPost.fields.image.fields.file.url}
            className="img-fluid"
            alt={blogPost.fields.slug}
          />
          <div className="blog-info">
            <h4 className="blog-title pt-3">{blogPost.fields.title}</h4>
            <div className="blog-time">
              <time
                className="blog-date"
                dateTime={blogPost.fields.publishDate}
              >
                {blogPost.fields.publishDate}
              </time>
            </div>
            <div className="row justify-content-center pt-3">
              {blogPost.fields.quote && (
                <blockquote className="blockquote blog-quote col-sm-10">
                  <p>{`"${blogPost.fields.quote}"`}</p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              )}
              <div className="blog-body">
                {/* //convert markdown text */}
                <ReactMarkdown source={blogPost.fields.body}></ReactMarkdown>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
