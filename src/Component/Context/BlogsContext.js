import React, { createContext, useState, useEffect, useMemo } from "react";
import client from "../../Container/Contentful";
export const BlogsContext = createContext();

const BlogsContextProvider = ({ children }) => {
  const [blog, setBlog] = useState("");
  const [category, setCategory] = useState([
    "all",
    "bamboo-made",
    "eco-friendly",
  ]);
  useEffect(() => {
    // retrieve product data from contenful
    client
      .getEntries({ content_type: "blogPost" })
      .then((response) => {
        let blogResponse = [...response.items];
        console.log("blog reponse is ", blogResponse);
        setBlog(blogResponse);
      })
      .catch(console.error);
  }, []);
  const contextValues = useMemo(
    () => ({
      blog,
      setBlog,
      category,
      setCategory,
    }),
    [blog, category]
  );
  return (
    <BlogsContext.Provider value={contextValues}>
      {children}
    </BlogsContext.Provider>
  );
};

export default BlogsContextProvider;
