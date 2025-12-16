import "./NewFamilySection.css";

const storeList = [
  {
    name: "상대아이파크점",
    phone: "042-822-8892",
    time: "15:00-24:00",
    img: "/img/img_person001.png"
  },
  {
    name: "전주서신점",
    phone: "063-276-3392",
    time: "15:00-24:00",
    img: "/img/img_person002.png"
  },
  {
    name: "창동역점",
    phone: "02-902-2292",
    time: "15:00-24:00",
    img: "/img/img_person003.png"
  },
  {
    name: "도봉힐스테이트점",
    phone: "02-3444-2292",
    time: "15:00-24:00",
    img: "/img/img_person004.png"
  },
  {
    name: "월평선사점",
    phone: "042-488-3392",
    time: "15:00-24:00",
    img: "/img/img_person005.png"
  },
  {
    name: "양주고암점",
    phone: "031-867-5592",
    time: "15:00-24:00",
    img: "/img/img_person006.png"
  }
];

function NewFamilySection() {
  return (
    <section className="family-section">
      {/* 타이틀 */}
      <div className="family-header">
        <h2>NEW FAMILY STORE</h2>
        <p>
          맛닭꼬의 가족이 된 것을 진심으로 환영합니다!
        </p>
      </div>

      {/* 매장 카드 */}
      <div className="family-grid">
        {storeList.map((store, idx) => (
        <div className="family-card-frame" 
            style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/img_frame.png)`
        }}>
          <div className="family-card" key={idx}>
            <span className="badge">오픈</span>

            <div className="family-inner">
              <img
                src={process.env.PUBLIC_URL + store.img}
                alt={store.name}
              />

              <div className="family-info">
                <strong>{store.name}</strong>
                <p>
                  <span>전화번호</span> {store.phone}
                </p>
                <p>
                  <span>영업시간</span> {store.time}
                </p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}

export default NewFamilySection;
