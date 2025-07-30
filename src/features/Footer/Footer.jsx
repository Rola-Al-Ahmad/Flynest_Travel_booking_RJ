import React, { useMemo } from "react";

import "./Footer.css";
import FooterLinks from "./components/FooterLinks";
import FooterMiddle from "./components/FooterMiddle";
import FooterBottom from "./components/FooterBottom";

const Footer = () => {
  const content = useMemo(
    () => [
      {
        linkName: "Company",
        links: [
          { name: "About Us", link: "about" },
          { name: "News", link: "news" },
          { name: "FAQ", link: "/" },
          { name: "Contact Us", link: "contact" },
        ],
      },
      {
        linkName: "Explore",
        links: [
          { name: "Tours", link: "/tours", icons: "ri-building-line" },
          { name: "Hotels", link: "/hotels", icons: "ri-hotel-line" },
          { name: "Transports", link: "/transports", icons: "ri-bus-line" },
          {
            name: "Restaurants",
            link: "/restaurants",
            icons: "ri-restaurant-line",
          },
        ],
      },
      {
        linkName: "Quick Links",
        links: [
          { name: "Home", link: "/", icons: "ri-home-4-line" },
          { name: "About", link: "/about", icons: "ri-information-line" },
          { name: "Contact", link: "/contact", icons: "ri-mail-line" },
        ],
      },
      {
        linkName: "Contact",
        links: [
          {
            name: "78/A Floor, New York, USA",
            link: "/",
            icons: "ri-map-pin-line me-2",
          },
          { name: "(+961) 71 123 456", link: "/", icons: "ri-phone-line me-2" },
          {
            name: "example@example.com",
            link: "/",
            icons: "ri-mail-line me-2",
          },
        ],
      },
    ],
    []
  );
  return (
    <footer className="footer-container text-white pt-5">
      <div className="container">
        <div className="row gy-4">
          {content.map((item, index) => (
            <FooterLinks item={item} key={index} />
          ))}
        </div>
        <FooterMiddle />
        <FooterBottom />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
