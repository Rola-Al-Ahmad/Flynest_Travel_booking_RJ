import { memo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../../../../public/Images/image14.png";
import img2 from "../../../../public/Images/image10.jpeg";
import img3 from "../../../../public/Images/image8.jpeg";
import img4 from "../../../../public/Images/image3.png";

const TourSlider = () => {
  
  const imges = [img1, img2, img3, img4];
  return (
    <div className="tour-detail-page">
      <div className="tour-slider">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1.8}
          centeredSlides
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="tourSwiper"
        >
          {imges.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`slide ${index + 1}`}
                className={`tour-slide-img${
                  (index + 1) % 2 === 0 ? " active-slide" : ""
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(TourSlider);
