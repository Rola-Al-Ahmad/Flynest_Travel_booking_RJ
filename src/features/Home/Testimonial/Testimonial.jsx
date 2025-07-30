import React, { useMemo } from "react";

import testimonial1 from "../../../assets/testimonial-1.jpeg";
import tst from "../../../assets/testimonial-three-banner.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TstItem from "./components/TstItem";
import TstBanner from "./components/TstBanner";

import "./Testimonial.css";
import Container from "../../../shared/components/atoms/Container";

const Testimonial = () => {
  const subTitle = useMemo(
    () => (
      <>
        what people hava said <br /> about our service
      </>
    ),
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Leila Nasser",
        role: "Photographer",
        image: tst,
        rating: 5,
        content:
          "One of the most peaceful and inspiring places I’ve ever been. Perfect for landscape photography. The vibe was calm, and everything was beautifully organized.",
        company: "Flynest",
        date: "Mar 05, 2025",
      },
      {
        name: "Ali Kassem",
        role: "Adventure Seeker",
        image: testimonial1,
        rating: 4,
        content:
          "Amazing experience! The mountains were stunning and the guide was very knowledgeable. I highly recommend this tour to anyone who loves nature and a little thrill.",
        company: "Flynest",
        date: "Feb 10, 2025",
      },

      {
        name: "Kareem Haddad",
        role: "Family Guy",
        image: testimonial1,
        rating: 5,
        content:
          "We had a blast as a family! The camping and boating combo was perfect for the kids. Safe, fun, and incredibly well managed.",
        company: "Flynest",
        date: "Apr 14, 2025",
      },
      {
        name: "Sara El-Amin",
        role: "Solo Explorer",
        image: tst,
        rating: 4,
        content:
          "Went on a solo trip and left with unforgettable memories. The staff was supportive and the locations were surreal. Will definitely join another trip soon.",
        company: "Flynest",
        date: "May 27, 2025",
      },
    ],
    []
  );

  const testimonialSlides = useMemo(
    () =>
      testimonials.map((tst, index) => (
        <SwiperSlide key={index}>
          <TstItem tst={tst} />
        </SwiperSlide>
      )),
    [testimonials]
  );

  return (
    <Container
      sectionName="testimonial"
      rowName="align-items-center"
      title="testimonials"
      subtitle={subTitle}
    >
      <div className="col-md-6 mb-sm-3">
        <Swiper className="tst-swiper" loop={true} spaceBetween={50}>
          {testimonialSlides}
        </Swiper>
      </div>

      <TstBanner tstBanner={tst} />
    </Container>
  );
};

export default React.memo(Testimonial);
