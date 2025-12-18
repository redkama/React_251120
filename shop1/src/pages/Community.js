import { useState } from "react";
import SubLayout from "../components/SubLayout";
import "./Community.css";

// 임시 게시글 데이터
const boardData = [
  {
    id: 1686,
    title: "문의합니다.",
    writer: "손진정",
    content: "안녕하세요.",
    date: "2025-12-16",
    view: 3,
    lock: true,
  },
  {
    id: 1685,
    title: "문의합니다.",
    writer: "한아름",
    content: "안녕하세요.",
    date: "2025-12-15",
    view: 6,
    lock: true,
  },
  {
    id: 1684,
    title: "답변드립니다.",
    writer: "맛닭꼬",
    content: "테스트입니다.",
    date: "2025-12-16",
    view: 3,
    lock: true,
  },
  {
    id: 1683,
    title: "문의합니다.",
    writer: "손진정",
    content: "테스토스테론",
    date: "2025-12-14",
    view: 6,
    lock: true,
  },
];

const Community = () => {
  const [filter, setFilter] = useState("title");
  const [keyword, setKeyword] = useState("");

  const filteredList = boardData.filter((item) => {
    if (filter === "title") return item.title.includes(keyword);
    if (filter === "writer") return item.writer.includes(keyword);
    if (filter === "content") return item.content.includes(keyword); // 임시
    return true;
  });

  return (
    <SubLayout
      title="고객의 소리"
      desc="고객들의 한마디 한마디에 귀 기울이겠습니다"
      tabs={[
        { label: "공지사항", path: "/community/notice" },
        { label: "고객의 소리", path: "/community" },
        { label: "보도자료", path: "/community/news" },
      ]}
    >
      <div className="board-wrap">
        {/* 검색 영역 */}
        <div className="board-search">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="title">제목</option>
            <option value="writer">글쓴이</option>
            <option value="content">내용</option>
          </select>

          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          <button>검색</button>
        </div>

        <div className="board-total">
          총 <strong>{filteredList.length}</strong>건
        </div>

        {/* 게시판 테이블 */}
        <table className="board-table">
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
              <th>조회</th>
            </tr>
          </thead>

          <tbody>
            {filteredList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td className="title">
                  {item.title}
                  {item.lock && <span className="lock">🔒</span>}
                </td>
                <td>{item.writer}</td>
                <td>{item.date}</td>
                <td>{item.view}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="board-write">
          <button>글쓰기</button>
        </div>
      </div>
    </SubLayout>
  );
};

export default Community;
