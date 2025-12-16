import "./MainBanner.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

function MainBanner() {
  const images = [
    process.env.PUBLIC_URL + "/img/img_main.jpg",
    process.env.PUBLIC_URL + "/img/img_main2.jpg",
  ];

  return (
    <section className="section section-main">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{ delay: 4000 }}
        loop
        effect="fade"
        speed={1000}
        navigation
        pagination={{ clickable: true }}
        className="main-banner"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="banner-slide"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MainBanner;
