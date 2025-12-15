import { useRef, useState } from "react";
import "./Header.css";

const menuData = [
  { title: "COMPANY", sub: ["CEO 인사말", "BI", "연혁", "오시는길"] },
  { title: "BRAND STORY", sub: ["브랜드소개", "신선푸드", "신선의 하루", "물류의 하루", "현미베이크이야기"] },
  { title: "MENU", sub: ["신메뉴", "현미베이크치킨", "로스트치킨", "후라이드치킨", "사이드"] },
  { title: "STORE", sub: ["매장찾기"] },
  { title: "FRANCHISE", sub: ["맛닭꼬 경쟁력", "창업절차", "창업비용", "인테리어", "창업상담"] },
  { title: "COMMUNITY", sub: ["공지사항", "고객의소리", "보도자료", "맛닭꼬 포장앱 안내"] },
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

  return (
    <header className="header">
      <div className="top-logo">
        <div className="top-inner">
          <h1 className="top-logo-center">
            <img src={process.env.PUBLIC_URL + "/img/img_logo_main.jpg"} alt="맛닭꼬" />
          </h1>

          <ul className="top-sns">
            <li><img src={process.env.PUBLIC_URL + "/img/icon-facebook.png"} alt="fb" /></li>
            <li><img src={process.env.PUBLIC_URL + "/img/icon-blog.png"} alt="blog" /></li>
            <li><img src={process.env.PUBLIC_URL + "/img/icon-instagram.png"} alt="insta" /></li>
            <li><img src={process.env.PUBLIC_URL + "/img/icon-youtube.png"} alt="yt" /></li>
          </ul>
        </div>
      </div>

      <nav className="nav-bar" onMouseLeave={close}>
        <ul className="gnb">
          {menuData.map((m, i) => (
            <li
              key={i}
              className={activeMenu === i ? "active" : ""}
              onMouseEnter={() => open(i)}
            >
              {m.title}
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
                {m.sub.map((s, j) => <li key={j}>{s}</li>)}
              </ul>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
