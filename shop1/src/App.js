import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Title2 from "./components/Title2";
import MenuStoreSection from "./components/MenuStoreSection";

function App() {
  const images = [
    process.env.PUBLIC_URL + "/img/img_main.jpg",
    process.env.PUBLIC_URL + "/img/img_main2.jpg",
  ];

  return (
    <div className="App">
      <Header />

      {/* ===== 1페이지 : 메인 배너 ===== */}
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

      {/* ===== 2페이지 ===== */}
      <section className="section">
        <MenuStoreSection />
      </section>

      {/* ===== 3페이지 ===== */}
      <section className="section">
        <Title2 />
      </section>

      {/* ===== 4페이지 ===== */}
      <section className="section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
