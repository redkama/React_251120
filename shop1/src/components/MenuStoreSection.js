import "./MenuStoreSection.css";

function MenuStoreSection() {
  return (
    <section className="menu-store">
      <div
        className="card menu"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/img_menu001.jpg)`
        }}
      >
        <div className="card-inner">
          <h2>MENU</h2>
          <p>정성으로 개발한 최고의 메뉴를 소개합니다.</p>
          <span className="more">자세히 보기 →</span>
        </div>
      </div>

      <div
        className="card store"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/img_store002.jpg)`
        }}
      >
        <div className="card-inner">
          <h2>STORE</h2>
          <p>가까운 맛닭꼬 매장을 찾아보세요.</p>
          <input placeholder="매장명을 검색하세요." />
        </div>
      </div>

      <div
        className="card franchise"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/img/img_store001.jpg)`
        }}
      >
        <div className="card-inner">
          <h2>FRANCHISE</h2>
          <p>창업 관련 정보를 확인하세요.</p>
          <ul className="franchise-links">
            <li>SMS 간편문의 →</li>
            <li>PROCESS 창업절차 →</li>
            <li>CALL 1661-3392</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MenuStoreSection;
