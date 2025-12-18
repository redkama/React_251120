import { useRef, useState } from "react";
import "./Header.css";

import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

const menuData = [
  { title: "COMPANY", path: "/company", sub: ["CEO 인사말", "BI", "연혁", "오시는길"] },
  { title: "BRAND STORY", path: "/brand", sub: ["브랜드소개", "신선푸드", "신선의 하루", "물류의 하루", "현미베이크이야기"] },
  { title: "MENU", path: "/menu", sub: ["신메뉴", "현미베이크치킨", "로스트치킨", "후라이드치킨", "사이드"] },
  { title: "STORE", path: "/store", sub: ["매장찾기"] },
  { title: "FRANCHISE", path: "/franchise", sub: ["맛닭꼬 경쟁력", "창업절차", "창업비용", "인테리어", "창업상담"] },
  { title: "COMMUNITY", path: "/community", sub: ["공지사항", "고객의소리", "보도자료", "맛닭꼬 포장앱 안내"] },
];

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const timer = useRef(null);

  const open = (i) => {
    clearTimeout(timer.current);
    setActiveMenu(i);
  };

  const close = () => {
    timer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const location = useLocation();

  const goPage = () => {
    setActiveMenu(null);
  };

  const { cart } = useSelector((state) => state);

  // 총 상품 수량 (count 합산)
  const cartCount = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <header className="header">
      <div className="top-logo">
        <div className="top-inner">
          <h1 className="top-logo-center">
            <Link to="/" className="logo-link">
              <img src={process.env.PUBLIC_URL + "/img/img_logo_main.jpg"} alt="맛닭꼬" />
            </Link>
          </h1>
          <div className="top-right">
            <div className="top-cart">
              <Link to="/cart">
                <img
                  src={process.env.PUBLIC_URL + "/img/img_cart.jpg"}
                  alt="cart"
                />

                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
            </div>

            <ul className="top-sns">
              
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + "/img/icon-facebook.png"} alt="fb" />
                </a>
              </li>

              <li>
                <a href="https://blog.naver.com/" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + "/img/icon-blog.png"} alt="blog" />
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + "/img/icon-instagram.png"} alt="insta" />
                </a>
              </li>

              <li>
                <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  <img src={process.env.PUBLIC_URL + "/img/icon-youtube.png"} alt="yt" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="nav-bar" onMouseLeave={close}>
        <ul className="gnb">
          {menuData.map((m, i) => (
            <li
              key={i}
              className={location.pathname === m.path ? "active" : ""}
              onMouseEnter={() => open(i)}
            >
              <Link to={m.path} onClick={goPage}>{m.title}</Link>
            </li>
          ))}
        </ul>

        <div className={`mega-menu ${activeMenu !== null ? "open" : ""}`}>
          <div className="mega-inner">
            {menuData.map((m, i) => (
              <ul
                key={i}
                className={`mega-col ${activeMenu === i ? "active" : ""}`}
                onMouseEnter={() => open(i)}
              >
                {m.sub.map((s, j) => (
                  <li key={j}>
                    <Link to={m.path} onClick={goPage}>
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
