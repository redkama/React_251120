import { useState } from "react";
import "./YoutubeSection.css";

const youtubeVideos = [
  {
    id: "wzaL5QIJ5iQ",
    title: "맛닭꼬 올(ALL)바른 메뉴영상"
  },
  {
    id: "tA9mhF7JW6o",
    title: "[맛있는 닭에 꽂혔다!] 맛닭꼬 BY.멜로펀치"
  },
  {
    id: "GTOVZjzbsZE",
    title: "8년간 치킨 팔아서 차사고 집사고 결혼까지한 40살"
  },
  {
    id: "wJhgrDbnkJ4",
    title: "요식업 처음인데 전혀 어렵지 않아요!"
  }
];

function YoutubeSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="youtube-section">
      {/* 타이틀 영역 */}
      <div className="youtube-header">
        <h2>YOUTUBE CHANNEL</h2>
        <p>
          더 많은 맛닭꼬 관련 유튜브 영상을 시청하세요!
          <span className="yt-icon">▶</span>
        </p>
      </div>

      {/* 영상 영역 */}
      <div className="youtube-grid">
        {youtubeVideos.map((video) => (
          <div
            key={video.id}
            className="youtube-item"
            onClick={() => setActiveVideo(video.id)}
          >
            {activeVideo === video.id ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                />
                <div className="play-btn" />
              </>
            )}
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default YoutubeSection;
