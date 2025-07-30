import React, { useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import brand1 from "../../../assets/brand-1.jpeg";
import brand2 from "../../../assets/brand-2.jpeg";
import brand3 from "../../../assets/brand-3.jpeg";
import brand4 from "../../../assets/brand-4.png";
import brand5 from "../../../assets/brand-5.png";

import Container from "../../../shared/components/atoms/Container";

import "./Brand.css";
const Brand = () => {
  const brands = useMemo(() => [brand1, brand2, brand3, brand4, brand5], []);

  // memoize to prevent re-renders on every component update.
  const renderedSlides = useMemo(
    () =>
      brands.map((brand, index) => (
        <SwiperSlide key={index}>
          <div className="brand-img">
            <img
              src={brand}
              alt={`brand-${index + 1}-img`}
              className="img-fluid"
            />
          </div>
        </SwiperSlide>
      )),
    [brands]
  );
  return (
    <Container sectionName="brands" rowName="align-items-center">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4.5}
        breakpoints={{
          1399: {
            slidesPerView: 4.5,
          },
          991: {
            slidesPerView: 3.5,
          },
          767: {
            slidesPerView: 3.5,
          },
          575: {
            slidesPerView: 2.5,
          },
          320: {
            slidesPerView: 1.75,
          },
        }}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="brand-swiper"
      >
        {renderedSlides}
      </Swiper>
    </Container>
  );
};

export default React.memo(Brand);
