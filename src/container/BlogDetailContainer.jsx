import React from "react";

const BlogDetailContainer = ({ blog }) => {
  const {
    title,
    summary,
    description,
    author,
    date,
    tags
  } = blog;

  return (
    <main className="wrapper">
      <section className="blog-details bg-dark-100 py-5">
        <div className="container">
          <h1 className="text-white mb-3">{title}</h1>
          <h5 className="text-olive mb-4">{summary}</h5>

          <div className="mb-4 text-gray-400">
            <span><strong>Yazar:</strong> {author || "Anonim"}</span><br />
            <span><strong>Tarih:</strong> {new Date(date).toLocaleDateString("tr-TR")}</span><br />
            {tags && tags.length > 0 && (
              <div className="mt-2">
                <strong>Etiketler:</strong> {tags.join(", ")}
              </div>
            )}
          </div>

          {description.map((para, index) => (
            <p key={index} className="text-gray-300 mb-4">{para}</p>
          ))}

          {tags && tags.length > 0 && (
            <div className="mt-3">
              <strong className="text-white d-block mb-2">Etiketler:</strong>
              <div className="d-flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span key={index} className="badge bg-olive text-white py-2 px-3 rounded-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BlogDetailContainer;
