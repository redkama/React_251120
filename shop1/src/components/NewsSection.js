import "./NewsSection.css";
import { useState } from "react";
import newsData from "../db/news";

const VIEW_COUNT = 3;

function NewsSection() {
  const [tab, setTab] = useState("notice");
  const [visibleCount, setVisibleCount] = useState(VIEW_COUNT);

  const list = newsData[tab];
  const visibleList = list.slice(0, visibleCount);

  const handleMore = () => {
    setVisibleCount((prev) => prev + VIEW_COUNT);
  };

  const handleTabChange = (type) => {
    setTab(type);
    setVisibleCount(VIEW_COUNT); // 🔥 탭 변경 시 초기화
  };

  return (
    <section className="news-section">
      {/* 타이틀 */}
      <div className="news-header">
        <h2>MATTACCO NEWS</h2>
        <p>맛닭꼬의 새로운 소식을 알립니다.</p>
      </div>

      {/* 탭 */}
      <div className="news-tabs">
        <button
          className={tab === "notice" ? "active" : ""}
          onClick={() => handleTabChange("notice")}
        >
          공지사항
        </button>
        <button
          className={tab === "press" ? "active" : ""}
          onClick={() => handleTabChange("press")}
        >
          언론기사
        </button>
      </div>

      {/* 리스트 */}
      <ul className="news-list">
        {visibleList.map((item) => (
          <li key={item.id} className="news-item">
            <span className="badge">{item.type}</span>
            <span className="date">{item.date}</span>
            <span className="title">{item.title}</span>
          </li>
        ))}
      </ul>

      {/* 더보기 버튼 */}
      {visibleCount < list.length && (
        <div className="news-more-wrap">
          <button className="news-more" onClick={handleMore}>
            더보기 +
          </button>
        </div>
      )}
    </section>
  );
}

export default NewsSection;
