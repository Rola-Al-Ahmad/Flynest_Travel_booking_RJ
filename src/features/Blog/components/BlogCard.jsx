import React from "react";

const BlogMeta = ({ author, newsSpan }) => (
  <div className="d-flex justify-content-between blog-section-meta small">
    <span>
      <i className="ri-user-line me-1"></i>
      {author}
    </span>
    <span>
      <i className="ri-time-line me-1" /> {newsSpan}
    </span>
  </div>
);

const BlogCard = ({ item, blogPost, blogCard }) => {
  if (blogPost) {
    return (
      <div className="blog-section-post mb-4">
        <small className="blog-section-small-text">{item.cardTitle}</small>
        <h6 className="blog-section-card-title">{item.cardDescription}</h6>
        <BlogMeta author={item.author} newsSpan={item.newsSpan} />
      </div>
    );
  }

  if (blogCard) {
    return (
      <div className="blog-section-card overflow-hidden">
        <img
          src={item.newsImg}
          alt={item.cardTitle || "Blog image"}
          className="img-fluid"
        />
        <div className="p-3">
          <small className="blog-section-small-text">{item.cardTitle}</small>
          <h6 className="blog-section-card-title">{item.cardDescription}</h6>
          <BlogMeta author={item.author} newsSpan={item.newsSpan} />
        </div>
      </div>
    );
  }
};

export default React.memo(BlogCard);
