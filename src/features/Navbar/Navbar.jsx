import React, { useCallback, useEffect, useMemo, useState } from "react";

import NavHeader from "./components/NavHeader";
import Nav from "./components/Nav";

import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const navStyle = useMemo(
    () => ({
      backgroundColor: "#12151e",
    }),
    []
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    // Optionally, call once to handle initial load
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.getElementById("navtoggle");
      if (
        navbar &&
        navbar.classList.contains("show") &&
        !navbar.contains(event.target)
      ) {
        console.log("clicked outside");
        toggleMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [toggleMenu]);

  return (
    <nav
      className="text-white p-0 navbar navbar-expand-lg flex-column"
      style={navStyle}
    >
      <NavHeader toggleMenu={toggleMenu} />
      <Nav
        isMenuOpen={isMenuOpen}
        handleClose={handleClose}
        setIsMenuOpen={setIsMenuOpen}
      />
    </nav>
  );
};

export default React.memo(Navbar);
