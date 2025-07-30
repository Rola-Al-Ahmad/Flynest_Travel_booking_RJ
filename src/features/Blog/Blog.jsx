import React, { useMemo } from "react";

import vanImg from "../../assets/news-6.png";

import news1 from "../../assets/news-1.png";
import news2 from "../../assets/news-2.png";
import news3 from "../../assets/news-3.png";
import news4 from "../../assets/news-4.png";
import news5 from "../../assets/news-5.png";
import news6 from "../../assets/news-6.png";
import news7 from "../../assets/news-7.png";
import news8 from "../../assets/news-8.png";
import news9 from "../../assets/news-9.png";

import BlogCard from "./components/BlogCard";

import "./Blog.css";

const Blog = () => {
  const newsItems = useMemo(
    () => [
      {
        newsImg: news1,
        newsSpan: "10 Min Read",
        cardTitle: "Wanderlust Wisdom",
        cardDescription:
          "Travel opens your heart, broadens your mind, and fills your life with stories to tell.",
        author: "Amelia Rivers",
      },
      {
        newsImg: news2,
        newsSpan: "12 Min Read",
        cardTitle: "Hidden Gems",
        cardDescription:
          "Uncover breathtaking destinations that are often overlooked by the typical tourist.",
        author: "Liam Stone",
      },
      {
        newsImg: news3,
        newsSpan: "9 Min Read",
        cardTitle: "Cultural Wonders",
        cardDescription:
          "Experience the depth of global heritage through rituals, cuisine, and community life.",
        author: "Sofia Lane",
      },
      {
        newsImg: news4,
        newsSpan: "8 Min Read",
        cardTitle: "Eco Adventures",
        cardDescription:
          "Explore sustainable travel tips and planet-friendly destinations for conscious explorers.",
        author: "Noah Green",
      },
      {
        newsImg: news5,
        newsSpan: "14 Min Read",
        cardTitle: "Local Flavors",
        cardDescription:
          "From street food to fine dining: a taste of culture through its most iconic dishes.",
        author: "Olivia Carter",
      },
      {
        newsImg: news6,
        newsSpan: "11 Min Read",
        cardTitle: "Art in Motion",
        cardDescription:
          "From murals to museums, discover how art defines the spirit of a city.",
        author: "Ethan Clark",
      },
      {
        newsImg: news7,
        newsSpan: "13 Min Read",
        cardTitle: "Mindful Travel",
        cardDescription:
          "Slow down and connect with the places you visit on a deeper emotional and spiritual level.",
        author: "Ava Monroe",
      },
      {
        newsImg: news8,
        newsSpan: "10 Min Read",
        cardTitle: "Road Trip Diaries",
        cardDescription:
          "Hit the open road with these unforgettable routes and travel hacks.",
        author: "Leo Mitchell",
      },
      {
        newsImg: news9,
        newsSpan: "15 Min Read",
        cardTitle: "Sunsets & Skylines",
        cardDescription:
          "Capture the magic of golden hours and city lights across the globe.",
        author: "Chloe Bennett",
      },
    ],
    []
  );

  return (
    <div className="blog-section main-wrapper text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <img
              src={vanImg}
              alt="Van"
              className="img-fluid blog-section-main-img rounded-3"
            />
          </div>
          <div className="col-lg-6">
            {newsItems.map((item, index) => (
              <BlogCard key={index} item={item} blogPost={index < 3} />
            ))}
          </div>
        </div>
        <div className="row pt-4">
          {newsItems.map((item, index) => (
            <div className="col-lg-4 mb-4" key={index}>
              <BlogCard item={item} blogCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
