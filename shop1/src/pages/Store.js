import { useState } from "react";
import SubLayout from "../components/SubLayout";
import storeData from "../db/store";
import "./Store.css";

import KakaoMapModal from "../components/KakaoMapModal";

const Store = () => {
  const [keyword, setKeyword] = useState("");
  const [deliveryOnly, setDeliveryOnly] = useState(false);

  // 🔥 시/도 / 구·군 상태
  const [sido, setSido] = useState("");
  const [gugun, setGugun] = useState("");

  /* ================= 시/도 목록 ================= */
  const sidoList = [...new Set(
    storeData.map(store => store.add.split(" ")[0])
  )];

  /* ================= 구/군 목록 (시/도 기준) ================= */
  const gugunList = sido
    ? [...new Set(
        storeData
          .filter(store => store.add.startsWith(sido))
          .map(store => store.add.split(" ")[1])
      )]
    : [];

  /* ================= 검색 필터 ================= */
  const filteredStores = storeData.filter(store => {
    const [storeSido, storeGugun] = store.add.split(" ");

    const matchSido = sido ? storeSido === sido : true;
    const matchGugun = gugun ? storeGugun === gugun : true;

    const matchKeyword =
      store.name.includes(keyword) || store.add.includes(keyword);

    const matchDelivery =
      deliveryOnly ? store.delivery === true : true;

    return matchSido && matchGugun && matchKeyword && matchDelivery;
  });

  const [selectedStore, setSelectedStore] = useState(null);

return (
    <SubLayout
      title="매장찾기"
      desc="각 지역별 맛닭꼬 매장을 찾아보세요."
    >
      <div className="store-wrap">

        {/* ================= 검색 영역 ================= */}
        <div className="store-search">
          <div className="search-group">
            <strong>지역 검색</strong>

            {/* 시/도 */}
            <select
              value={sido}
              onChange={(e) => {
                setSido(e.target.value);
                setGugun(""); // 🔥 시/도 변경 시 구/군 초기화
              }}
            >
              <option value="">-시/도-</option>
              {sidoList.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
            </select>

            {/* 구/군 */}
            <select
              value={gugun}
              onChange={(e) => setGugun(e.target.value)}
              disabled={!sido}
            >
              <option value="">-구/군-</option>
              {gugunList.map((g, i) => (
                <option key={i} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div className="search-group">
            <strong>옵션</strong>
            <label className="check">
              <input
                type="checkbox"
                checked={deliveryOnly}
                onChange={() => setDeliveryOnly(!deliveryOnly)}
              />
              배달가능
            </label>
          </div>

          <div className="search-group">
            <strong>매장검색</strong>
            <input
              placeholder="ex. 서교동"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="btn-search">검색하기</button>
          </div>
        </div>

        {/* ================= 매장 리스트 ================= */}
        <div className="store-list">
          <h4 className="list-title">매장리스트</h4>

          {filteredStores.map((store, i) => (
            <div className="store-item" key={i}>
              <div className="store-info">
                <p className="store-name">
                  <span className="region">[{store.add.split(" ")[0]}]</span>{" "}
                  {store.name}

                  {store.delivery ? (
                    <span className="store-badge">배달가능</span>
                  ) : (
                    <span className="store-badge off">배달불가</span>
                  )}
                </p>

                <p className="store-add">{store.add}</p>
                <p className="store-meta">
                  연락처 : {store.call} &nbsp;&nbsp;
                  영업시간 : {store.time}
                </p>
              </div>

              <button
                className="btn-map"
                onClick={() => setSelectedStore(store)}
                >
                매장지도
              </button>
            </div>
          ))}
        </div>
      </div>
        {selectedStore && (
            <KakaoMapModal
            store={selectedStore}
            onClose={() => setSelectedStore(null)}
            />
        )}
    </SubLayout>

    


  );
};

export default Store;
