import React, { useEffect, useMemo, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import toursData from "../../../Data/Tours.json";

import "./Tour.css";
import Container from "../../../shared/components/atoms/Container";
import ItemCard from "../../ListingPage/components/ItemCard";

const Tour = ({ tourContainer, tourCount }) => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setTours(toursData);
  }, []);

  const subTitle = useMemo(
    () => (
      <>
        Most favorite tour place <br /> in the world
      </>
    ),
    []
  );

  const toursFilter = useMemo(() => {
    if (!tours.length) return [];
    switch (tourCount) {
      case 2:
        return tours.filter((tour) => tour.id >= 8 && tour.id <= 12);
      case 3:
        return tours.filter((tour) => tour.id >= 1 && tour.id <= 3);
      default:
        return tours.filter((tour) => tour.id >= 1 && tour.id <= 7);
    }
  }, [tours, tourCount]);

  return (
    <Container
      sectionName="tours"
      className={
        tourContainer ? `tours-container-${tourCount} position-relative` : ""
      }
      title="Featured Tours"
      subtitle={subTitle}
      sectionTitleName="d-flex flex-column align-items-center"
    >
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          1399: {
            slidesPerView: 4,
          },
          1199: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 1.5,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        className="mt-4 swiper tours-swiper position-relative"
      >
        {toursFilter.map((tour) => (
          <SwiperSlide key={tour.id}>
            <ItemCard item={tour} type="tours" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default React.memo(Tour);
