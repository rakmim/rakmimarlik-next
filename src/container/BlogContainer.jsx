import React from "react";
import BlogCard from "../components/blog/BlogCard";

const BlogContainer = ({ blogs }) => {
  return (
    <section className="services bg-dark-100 pb-0">
      <div className="container">
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-4" key={blog.slug}>
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContainer;
