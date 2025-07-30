import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./App.jsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { CartProvider } from "./features/Cart/context/CartContext.jsx";
import { BookingProvider } from "./features/Cart/context/BookingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BookingProvider>
        <RouterProvider router={router} />
      </BookingProvider>
    </CartProvider>
  </StrictMode>
);
