import "./Footer.css";
import { Link } from "react-router-dom";

const footerMenu = [
  { title: "Company", path: "/company", sub: ["CEO 인사말", "BI", "연혁", "오시는길"] },
  { title: "Brand Story", path: "/brand", sub: ["브랜드소개", "신선푸드", "신선의 하루", "물류의 하루", "현미베이크이야기"] },
  { title: "Menu", path: "/menu", sub: ["신메뉴", "현미베이크치킨", "로스트치킨", "후라이드치킨", "사이드"] },
  { title: "Store", path: "/store", sub: ["매장찾기"] },
  { title: "Franchise", path: "/franchise", sub: ["맛닭꼬 경쟁력", "창업절차", "창업비용", "인테리어", "창업상담"] },
  { title: "Community", path: "/community", sub: ["공지사항", "고객의소리", "보도자료", "맛닭꼬 포장앱 안내"] },
];

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* 상단 전화 / SNS */}
      <div className="footer-top">
        <div className="footer-top-inner">
          <div className="footer-call">
            <span className="icon"><img src={process.env.PUBLIC_URL + "/img/icon_call.png"} alt="call" /></span>
            <span className="label">대표번호</span>
            <strong>1661-3392</strong>
          </div>

          <ul className="footer-sns">
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + "/img/icon_facebook_ft.png"} alt="fb" />
              </a>
            </li>

            <li>
              <a href="https://blog.naver.com/" target="_blank" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + "/img/icon_blog_ft.png"} alt="blog" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + "/img/icon_instagram_ft.png"} alt="insta" />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                <img src={process.env.PUBLIC_URL + "/img/icon_youtube_ft.png"} alt="yt" />
              </a>
            </li>
          </ul>
        </div>

        <button className="btn-top" onClick={scrollTop}>
          ▲<br />TOP
        </button>
      </div>

      {/* 메뉴 영역 */}
      <div className="footer-menu">
        <div className="footer-menu-inner">
          {footerMenu.map((m, i) => (
            <div className="footer-col" key={i}>
              <h4>
                <Link to={m.path}>{m.title}</Link>
              </h4>
              <ul>
                {m.sub.map((s, j) => (
                  <li key={j}>
                    <Link to={m.path}>{s}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
