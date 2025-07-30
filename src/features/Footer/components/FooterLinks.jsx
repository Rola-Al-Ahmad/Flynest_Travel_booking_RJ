import React from "react";
import { Link } from "react-router";

const FooterLinks = ({ item }) => {
  return (
    <div className="col-lg-3 col-md-6">
      <h4>{item.linkName}</h4>
      {item.linkName === "Contact Us" ? (
        item.links.map((link, index) => (
          <p key={index} className="small">
            <Link to={link.link}>
              <i className={link.icons}></i>
              {link.name}
            </Link>
          </p>
        ))
      ) : (
        <ul className="list-unstyled">
          {item.links.map((link, index) => (
            <li key={index}>
              <Link to={link.link} className="footer-link">
                <i className={link.icons || "ri-arrow-right-s-line"}></i>
                {link.name || ""}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(FooterLinks);
