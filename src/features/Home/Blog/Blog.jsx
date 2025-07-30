import React, { useMemo } from "react";
import Container from "../../../shared/components/atoms/Container";

import news4 from "../../../assets/news-4.png";
import news5 from "../../../assets/news-5.png";
import news6 from "../../../assets/news-6.png";

import "./Blog.css";
import BlogCard from "./components/BlogCard";

const Blog = () => {
  const newsItems = useMemo(
    () => [
      {
        newsImg: news4,
        newsSpan: "10 Min Read",
        cardTitle: "Tour Guide",
        cardDescription:
          "The World is a Book and Those Who don't Travel Read Only a Page",
      },
      {
        newsImg: news5,
        newsSpan: "15 Min Read",
        cardTitle: "Hidden Gems",
        cardDescription:
          "Discover breathtaking places off the beaten path that most tourists miss.",
      },
      {
        newsImg: news6,
        newsSpan: "10 Min Read",
        cardTitle: "Cultural Wonders",
        cardDescription:
          "Experience the traditions and flavors that make each destination unique.",
      },
    ],
    []
  );

  const subTitle = useMemo(
    () => (
      <>
        Latest news & articles from the <br /> blog posts
      </>
    ),
    []
  );

  //performance boost for larger lists or complex render logic.
  const blogCards = useMemo(
    () =>
      newsItems.map((news, index) => (
        <BlogCard
          key={index}
          newsImg={news.newsImg}
          newsSpan={news.newsSpan}
          cardTitle={news.cardTitle}
          cardDescription={news.cardDescription}
        />
      )),
    [newsItems]
  );

  return (
    <Container
      sectionName="blog"
      title="News & Articles"
      subtitle={subTitle}
      rowName="g-4"
    >
      {blogCards}
    </Container>
  );
};

export default React.memo(Blog);
