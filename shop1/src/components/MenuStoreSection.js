import "./MenuStoreSection.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

import menuData from "../db/menu";
import storeData from "../db/store";

function MenuStoreSection() {

  const [menuIndex, setMenuIndex] = useState(0);
  const [storeIndex, setStoreIndex] = useState(0);

  return (
    <section
      className="menu-store"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/img_sub_back.jpg)`
      }}
    >
      {/* MENU 카드 (Swiper 적용) */}
      <div className="card menu">
        <h2 className="menu-title">MENU</h2>
        <span className="menu-sub">정성으로 개발한 최고의 메뉴를 소개합니다.</span>

        <div className="card-media">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            onSlideChange={(swiper) => setMenuIndex(swiper.realIndex)}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}">${index + 1}</span>`
            }}
            className="menu-swiper"
          >
            {menuData.map((menu, i) => (
              <SwiperSlide key={i}>
                <div
                  className="menu-slide"
                  style={{ backgroundImage: `url(${menu.img})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <strong className="menu-en">{menuData[menuIndex].en}</strong>
        <span className="menu-ko">{menuData[menuIndex].ko}</span>
        <span className="menu-desc">{menuData[menuIndex].desc}</span>
        <span className="more">자세히 보기 →</span>
      </div>

      {/* STORE 카드 */}
      <div className="card store">
        <h2 className="store-title">STORE</h2>
        <span className="store-sub">가까운 맛닭꼬 매장을 찾아보세요.</span>

        <div className="card-media">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            onSlideChange={(swiper) => setStoreIndex(swiper.realIndex)}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}">${index + 1}</span>`
            }}
            className="store-swiper"
          >
            {storeData.map((store, i) => (
              <SwiperSlide key={i}>
                <div
                  className="store-slide"
                  style={{ backgroundImage: `url(${store.img})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <strong className="store-name">{storeData[storeIndex].name}</strong>
        <span className="store-call">{storeData[storeIndex].call}</span>
        <span className="more">자세히 보기 →</span>
      </div>

      {/* FRANCHISE 카드 */}
      <div className="card franchise">
        <h2 className="franchise-title">FRANCHISE</h2>
        <span className="franchise-sub">창업 관련 정보를 확인하세요.</span>

        <div className="franchise-body">
          {/* SMS */}
          <a href="#" className="franchise-item clickable">
            <div className="franchise-text">
              <strong>SMS</strong>
              <span>간편문의</span>
              <img
                src={process.env.PUBLIC_URL + "/img/icon_arrow_right.png"}
                alt="arrow"
                className="arrow-img"
              />
            </div>
            <img
              src={process.env.PUBLIC_URL + "/img/icon_sms.png"}
              alt="phone"
              className="franchise-icon"
            />
          </a>

          {/* PROCESS */}
          <a href="#" className="franchise-item clickable">
            <div className="franchise-text">
              <strong>PROCESS</strong>
              <span>창업절차 자세히보기</span>
              <img
                src={process.env.PUBLIC_URL + "/img/icon_arrow_right.png"}
                alt="arrow"
                className="arrow-img"
              />
            </div>
            <img
              src={process.env.PUBLIC_URL + "/img/icon_process.png"}
              alt="search"
              className="franchise-icon"
            />
          </a>

          {/* CALL */}
          <div className="franchise-item call">
            <div className="franchise-text">
              <strong>CALL US</strong>
              <span>평일 AM 9시 ~ PM 6시</span>
            </div>
            <em className="call-number">1661-3392</em>
          </div>
        </div>
      </div>

    </section>
  );
}

export default MenuStoreSection;
