import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import CartLayout from "./layouts/CartLayout";
import ListingLayout from "./layouts/ListingLayout";

import Index from "./features/Home/Index";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Blog from "./features/Blog/Blog";
import TourDetails from "./features/TourDetails/TourDetails";
import Cart from "./features/Cart/Cart";
import Checkout from "./features/CheckOut/Checkout";
import BookingConfirmation from "./features/BookingSummary/BookingConfirmation";
import ProtectedCheckout from "./features/CheckOut/ProtectedCheckout";
import NotFound from "./shared/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="news" element={<Blog />} />
      <Route path="tours/:id" element={<TourDetails />} />
      {/* <Route path="tours" element={<TourBooking />} /> */}
      {/* <Route path="hotels" element={<Hotels />} />
      <Route path="transports" element={<Transports />} />
      <Route path="restaurants" element={<Restaurants />} /> */}

      <Route
        path="/tours"
        element={<ListingLayout title="Tours - Leafcraft" />}
      >
        {/* <Route index element={<ListingPage />} /> */}
      </Route>

      <Route
        path="/hotels"
        element={<ListingLayout title="Hotels - Flynest" />}
      >
        {/* <Route index element={<ListingPage />} /> */}
      </Route>
      <Route
        path="/transports"
        element={<ListingLayout title="Transports - Flynest" />}
      >
        {/* <Route index element={<ListingPage />} /> */}
      </Route>
      <Route
        path="/restaurants"
        element={<ListingLayout title="Restaurants - Flynest" />}
      >
        {/* <Route index element={<ListingPage />} /> */}
      </Route>
      <Route path="cart" element={<CartLayout />}>
        <Route index element={<Cart />} />
        <Route element={<ProtectedCheckout />}>
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route element={<ProtectedCheckout />}>
          <Route path="payment" element={<Checkout />} />
        </Route>
        <Route element={<ProtectedCheckout />}>
          <Route path="bookingSummary" element={<BookingConfirmation />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: "/Flynest_Travel_booking_RJ/" }
);
