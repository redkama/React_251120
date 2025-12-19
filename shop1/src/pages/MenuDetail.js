import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SubLayout from "../components/SubLayout";
import menuData from "../db/menu";
import { addItem } from "../store";

import "./MenuDetail.css";

function MenuDetail() {
  const { menuId } = useParams();
  const dispatch = useDispatch();

  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState("");
  const [showToast, setShowToast] = useState(false);

  // ✅ Hook은 조건 없이 항상 실행
  useEffect(() => {
    setTimeout(() => setFade("end"), 100);
    return () => setFade("");
  }, [tab]);

  // 메뉴 찾기
  const menu = menuData.find((item) => item.id === Number(menuId));

  // ✅ 조건부 return은 Hook 이후
  if (!menu) {
    return (
      <div style={{ padding: "200px", textAlign: "center" }}>
        해당 메뉴가 존재하지 않습니다.
      </div>
    );
  }

  const { id, img, ko, en, desc, price } = menu;

  return (
    <SubLayout
      title="메뉴 소개"
      desc="맛닭꼬의 여러가지 메뉴를 소개합니다"
    >
      {/* 상세 상단 */}
      <div className="menu-detail-wrap">
        <div className="menu-detail-img">
          <img src={img} alt={ko} />
        </div>

        <div className="menu-detail-info">
          <h3 className="menu-detail-ko">{ko}</h3>
          <p className="menu-detail-en">{en}</p>
          <p className="menu-detail-desc">{desc}</p>

          <div className="menu-detail-price">
            {price.toLocaleString()}원
          </div>

          <div className="menu-detail-actions">
            <button
              className="btn-cart"
              onClick={() => {
                dispatch(
                  addItem({
                    id,
                    name: ko,
                    img,
                    price,
                    count: 1,
                  })
                );
                setShowToast(true);
                setTimeout(() => setShowToast(false), 2000);
              }}
            >
              장바구니 담기
            </button>

            <Link to="/cart" className="btn-outline">
              주문상품 확인
            </Link>
          </div>
        </div>
      </div>

      {/* 탭 영역 */}
      <div className="menu-detail-tab">
        <ul className="tab-menu">
          <li className={tab === 0 ? "active" : ""} onClick={() => setTab(0)}>
            메뉴 설명
          </li>
          <li className={tab === 1 ? "active" : ""} onClick={() => setTab(1)}>
            원산지 정보
          </li>
          <li className={tab === 2 ? "active" : ""} onClick={() => setTab(2)}>
            주의사항
          </li>
        </ul>

        <div className={`tab-content start ${fade}`}>
          {
            [
              <div key={0}>{desc}</div>,
              <div key={1}>국내산 닭고기를 사용합니다.</div>,
              <div key={2}>매운맛 조절이 가능합니다.</div>,
            ][tab]
          }
        </div>
      </div>
      {showToast && (
      <div className="cart-toast">
        장바구니에 담겼습니다 🛒
      </div>
      )}
    </SubLayout>
  );
}

export default MenuDetail;
