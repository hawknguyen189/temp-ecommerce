import React, { useContext } from "react";
import { BlogsContext } from "../Context/BlogsContext";
import { Link } from "react-router-dom";

const BlogSide = () => {
  const { blog, category } = useContext(BlogsContext);

  return (
    <div className="col-sm-3">
      {blog && (
        <div className="blog-side-bar">
          <div className="search-blog pt-2">
            <input
              type="search"
              className="form-control ds-input"
              placeholder="Search..."
              autoComplete="off"
            />
          </div>
          <div className="category pt-4">
            <h3 className="shop-heading">Categories</h3>
            <ul className="list-group list-group-flush">
              {category.map((e, index) => {
                return (
                  <li className="list-group-item list-category" key={index}>
                    <Link to={`/blog/${e.toUpperCase()}`}>
                      {e.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSide;
