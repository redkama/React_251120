import { useState } from "react";
import "./CommunityBoard.css";

const CommunityBoard = () => {
  const [boards, setBoards] = useState([
    { id: 1, title: "문의합니다.", writer: "손진영", content: "문의내용입니다.", views: 3, date: "2025-12-16" },
    { id: 2, title: "답변드립니다.", writer: "맛닭꼬", content: "답변내용입니다.", views: 5, date: "2025-12-15" },
  ]);

  const [mode, setMode] = useState("list"); // list | read | write | edit
  const [current, setCurrent] = useState(null);

  const [form, setForm] = useState({ title: "", writer: "", content: "" });

  const [filter, setFilter] = useState("title");
  const [keyword, setKeyword] = useState("");

  /* ================= 조회 ================= */
  const openRead = (id) => {
    setBoards(prev =>
      prev.map(b => b.id === id ? { ...b, views: b.views + 1 } : b)
    );
    setCurrent(boards.find(b => b.id === id));
    setMode("read");
  };

  /* ================= 작성 ================= */
  const savePost = () => {
    if (!form.title || !form.content) return alert("내용을 입력하세요");

    setBoards(prev => [
      ...prev,
      {
        id: prev.length + 1,
        title: form.title,
        writer: form.writer || "익명",
        content: form.content,
        views: 0,
        date: new Date().toISOString().slice(0, 10),
      },
    ]);
    setForm({ title: "", writer: "", content: "" });
    setMode("list");
  };

  /* ================= 수정 ================= */
  const updatePost = () => {
    setBoards(prev =>
      prev.map(b => b.id === current.id ? { ...b, ...form } : b)
    );
    setMode("list");
  };

  /* ================= 삭제 ================= */
  const deletePost = (id) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    setBoards(prev => prev.filter(b => b.id !== id));
    setMode("list");
  };

  /* ================= 검색 ================= */
  const filteredBoards = boards.filter(b =>
    b[filter].toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="board-wrap">

      {/* ===== 검색 ===== */}
      <div className="board-search">
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="title">제목</option>
          <option value="writer">글쓴이</option>
          <option value="content">내용</option>
        </select>
        <input
          placeholder="검색어 입력"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <button>검색</button>
      </div>

      {/* ===== BOARD SECTION TITLE ===== */}
        <div className="board-section-title">
            {(mode === "list") && <div className="board-count">총 {filteredBoards.length}건</div>}
            {(mode === "write") && <span>글쓰기</span>}
            {(mode === "read") && <span>상세보기</span>}
            {(mode === "edit") && <span>글 수정</span>}
        </div>

      {/* ===== 목록 ===== */}
      {mode === "list" && (
        <>
          

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
              {filteredBoards.map(b => (
                <tr key={b.id} onClick={() => openRead(b.id)}>
                  <td>{b.id}</td>
                  <td className="left">{b.title}</td>
                  <td>{b.writer}</td>
                  <td>{b.date}</td>
                  <td>{b.views}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="board-actions">
            <button onClick={() => {
                setForm({ title: "", writer: "", content: "" }); // 🔥 초기화
                setMode("write");
                }}
            >글쓰기</button>
          </div>
        </>
      )}

      {/* ===== 읽기 ===== */}
      {mode === "read" && current && (
        <div className="board-read">
          <h3>{current.title}</h3>
          <div className="meta">
            {current.writer} | {current.date} | 조회 {current.views}
          </div>
          <div className="content">{current.content}</div>

          <div className="board-actions">
            <button onClick={() => {
              setForm(current);
              setMode("edit");
            }}>수정</button>
            <button onClick={() => deletePost(current.id)}>삭제</button>
            <button onClick={() => setMode("list")}>목록</button>
          </div>
        </div>
      )}

      {/* ===== 작성 / 수정 ===== */}
      {(mode === "write" || mode === "edit") && (
        <div className="board-form">
          <input
            placeholder="제목"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <input
            placeholder="작성자"
            value={form.writer}
            onChange={e => setForm({ ...form, writer: e.target.value })}
          />
          <textarea
            placeholder="내용"
            value={form.content}
            onChange={e => setForm({ ...form, content: e.target.value })}
          />

          <div className="board-actions">
            <button onClick={mode === "write" ? savePost : updatePost}>
              {mode === "write" ? "등록" : "수정"}
            </button>
            <button onClick={() => setMode("list")}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityBoard;
