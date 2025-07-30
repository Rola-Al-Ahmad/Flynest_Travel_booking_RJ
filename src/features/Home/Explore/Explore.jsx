import React, { useCallback, useMemo, useState } from "react";

import Explore1 from "../../../assets/explore-1.svg";
import Explore2 from "../../../assets/explore-2.svg";
import Explore3 from "../../../assets/explore-3.svg";
import Explore4 from "../../../assets/explore-4.svg";
import Explore5 from "../../../assets/explore-5.svg";

import ExploreImg1 from "../../../assets/explore-img1.png";
import ExploreImg2 from "../../../assets/explore-img2.png";
import ExploreImg3 from "../../../assets/explore-img3.png";
import ExploreImg4 from "../../../assets/explore-img4.png";
import ExploreImg5 from "../../../assets/explore-img5.png";

import ExploreTab from "./components/ExploreTab";
import ExploreContent from "./components/ExploreContent";

import "./Explore.css";
import Container from "../../../shared/components/atoms/Container";

const Explore = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = useMemo(
    () => [
      {
        title: "Boating & Camping",
        img: Explore1,
        exploreImg: ExploreImg1,
        description:
          "Combine the joy of daytime water adventures with the beauty of nighttime camping in scenic, remote areas away from city noise.",
        details: [
          "Camp under the open sky, surrounded by stars and the gentle crackle of a campfire.",
          "Perfect for groups and families who love both activity and bonding under the stars.",
        ],
      },
      {
        title: "Trailers & Sports",
        img: Explore3,
        exploreImg: ExploreImg3,
        description:
          "Set off on a road adventure with a modern trailer, and fuel your trip with energizing sports and outdoor activities.",
        details: [
          "Enjoy the freedom of mobile living with all your essentials on wheels.",
          "This is a great choice for those who want both comfort and high-energy fun.",
        ],
      },
      {
        title: "Mountain & Hill Hiking",
        img: Explore4,
        exploreImg: ExploreImg4,
        description:
          "Escape the ordinary and reconnect with the earth as you hike across hills and ascend breathtaking mountain trails.",
        details: [
          "Climb trails that reward your effort with panoramic landscapes and fresh alpine air.",
          "Discover native wildlife, hidden waterfalls, and forest paths along your hike.",
        ],
      },
      {
        title: "Paragliding Tours",
        img: Explore5,
        exploreImg: ExploreImg5,
        description:
          "Get your adrenaline pumping with a once-in-a-lifetime experience of flying through the sky and seeing the world from above.",
        details: [
          "Launch from mountain cliffs and glide smoothly with professional instructors.",
          "A perfect experience for thrill-seekers and those chasing unforgettable memories.",
        ],
      },
      {
        title: "Music & Relaxing",
        img: Explore2,
        exploreImg: ExploreImg2,
        description:
          "Let go of everyday stress with a calming experience centered on peaceful music, cozy atmospheres, and tranquil scenery.",
        details: [
          "Relax with soft instrumental tunes or natural soundscapes in a serene environment.",
          "Best suited for emotional recharge, solo reflection, or quality time with loved ones.",
        ],
      },
    ],
    []
  );

  const subTitle = useMemo(
    () => (
      <>
        our best offer package <br /> for you
      </>
    ),
    []
  );

  const onTabClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const exploreTabs = useMemo(
    () =>
      tabs.map((item, index) => (
        <ExploreTab
          key={index}
          item={item}
          activeIndex={activeIndex}
          onTabClick={() => onTabClick(index)}
          index={index}
        />
      )),
    [tabs, activeIndex, onTabClick]
  );

  return (
    <Container
      sectionName="explore"
      rowName="mt-5 py-5 align-items-center"
      title="Explore the World"
      subtitle={subTitle}
    >
      <div className="col-lg-6">
        <div className="explore-tabs-wrap p-4 pb-2 rounded-3">
          {exploreTabs}
        </div>
      </div>
      <ExploreContent
        title={tabs[activeIndex].title}
        desc={tabs[activeIndex].description}
        img={tabs[activeIndex].exploreImg}
        details={tabs[activeIndex].details}
      />
    </Container>
  );
};

export default React.memo(Explore);
