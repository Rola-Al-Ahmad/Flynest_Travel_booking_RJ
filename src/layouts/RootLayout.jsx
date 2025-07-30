import React from "react";

import { Outlet } from "react-router";

import Navbar from "../features/Navbar/Navbar";
import Footer from "../features/Footer/Footer";

import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <ToastContainer />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default React.memo(RootLayout);
