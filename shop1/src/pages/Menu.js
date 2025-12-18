import { useEffect, useState } from "react";
import SubLayout from "../components/SubLayout";
import menuData from "../db/menu";

import "./Menu.css";

import { Link } from "react-router-dom";

const CATEGORY = ["ALL", "Bake", "Roast", "Fried", "Side"];

const Menu = () => {
  /* ===============================
     상태
  =============================== */
  const [category, setCategory] = useState("ALL");
  const [sortType, setSortType] = useState("");
  const [list, setList] = useState(menuData);

  /* ===============================
     필터 + 정렬 처리
  =============================== */
  useEffect(() => {
    let filtered = [...menuData];

    // 1️⃣ 카테고리 필터
    if (category !== "ALL") {
      filtered = filtered.filter(
        (item) => item.category === category
      );
    }

    // 2️⃣ 정렬
    if (sortType === "low") {
      filtered.sort((a, b) => a.price - b.price);
    }
    if (sortType === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }
    if (sortType === "name") {
      filtered.sort((a, b) => a.ko.localeCompare(b.ko));
    }

    setList(filtered);
  }, [category, sortType]);

  return (
    <SubLayout
      title="메뉴 소개"
      desc="맛닭꼬의 여러가지 메뉴를 소개합니다"
    >
      {/* ===== 필터 영역 ===== */}
      <div className="menu-filter">
        {/* 카테고리 */}
        <div className="menu-category">
          {CATEGORY.map((c) => (
            <button
              key={c}
              className={category === c ? "active" : ""}
              onClick={() => setCategory(c)}
            >
              {c === "ALL" ? "전체" : c}
            </button>
          ))}
        </div>

        {/* 정렬 */}
        <div className="menu-sort">
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">정렬 선택</option>
            <option value="low">낮은 가격순</option>
            <option value="high">높은 가격순</option>
            <option value="name">이름순</option>
          </select>
        </div>
      </div>

      {/* ===== 메뉴 리스트 ===== */}
      <div className="menu-grid">
        {list.map((menu) => (
            <Link
                to={`/menu/${menu.id}`}
                key={menu.id}
                className="menu-card-link"
            >
                <div className="menu-item" key={menu.id}>
                    <div className="menu-thumb-wrap">
                        {/* 🔥 뱃지 */}
                        {menu.badge && (
                        <span className={`menu-badge ${menu.badge.toLowerCase()}`}>
                            {menu.badge}
                        </span>
                        )}

                        <div
                        className="menu-thumb"
                        style={{ backgroundImage: `url(${menu.img})` }}
                        />
                    </div>

                    <strong className="menu-name">{menu.ko}</strong>
                    <span className="menu-en">{menu.en}</span>
                    <span className="menu-price">
                    {menu.price.toLocaleString()}원
                    </span>
                </div>
            </Link>
        ))}
      </div>
    </SubLayout>
  );
};

export default Menu;
