import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogsContext } from "../Context/BlogsContext";
import { useRouter } from "../CommonUse/CustomHooks";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer"; this can be used to convert rich text
import ReactMarkdown from "react-markdown"; //use to convert markdown format from contentful

const BlogDetail = () => {
  const { blog } = useContext(BlogsContext);
  const router = useRouter();
  let blogPost;
  if (blog) {
    blogPost = blog.find((e) => e.fields.slug === router.query.slug);
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
            <div className="blog-date">
              <i className="far fa-calendar-alt mr-2"></i>
              <time dateTime={blogPost.fields.publishDate}>
                {blogPost.fields.publishDate}
              </time>
              <i className="fas fa-folder mx-3">
                {blogPost.fields.categories.map((e, index) => {
                  return (
                    <Link
                      className="ml-2 post-category"
                      to={`/blog/${e}`}
                      key={index}
                    >{`${e},`}</Link>
                  );
                })}
              </i>
              <i className="fas fa-comments"></i>
            </div>
            <div className="row justify-content-center pt-3">
              {blogPost.fields.quote && (
                <blockquote className="blockquote blog-quote col-sm-10">
                  <ReactMarkdown>{blogPost.fields.quote}</ReactMarkdown>
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
            <div className="row">
              <div className="col-sm">
                <i className="fas fa-tag">
                  {blogPost.fields.tags &&
                    blogPost.fields.tags.map((element, index) => {
                      return (
                        <span className="post-category ml-2" key={index}>
                          {`${element},`}
                        </span>
                      );
                    })}
                </i>
              </div>
              {/* social share */}
              <div className="col-sm social-share row justify-content-end">
                <div className="d-flex justify-content-center">
                  <a
                    href="/"
                    className="rounded-circle network-bg d-flex justify-content-center"
                  >
                    <i className="fab fa-facebook align-self-center"></i>
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <a
                    href="/"
                    className="rounded-circle network-bg d-flex justify-content-center"
                  >
                    <i className="fab fa-twitter align-self-center"></i>
                  </a>
                </div>
                <div className="d-flex justify-content-center">
                  <a
                    href="/"
                    className="rounded-circle network-bg d-flex justify-content-center"
                  >
                    <i className="fab fa-instagram align-self-center"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
