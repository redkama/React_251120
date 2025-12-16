import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import MainBanner from "./components/MainBanner";
import MenuStoreSection from "./components/MenuStoreSection";
import YoutubeSection from "./components/YoutubeSection";
import NewFamilySection from "./components/NewFamilySection";
import NewsSection from "./components/NewsSection";

function App() {
  return (
    <div className="App">
      <Header />

      {/* ===== 1페이지 : 메인 배너 ===== */}
      <MainBanner />

      {/* ===== 2페이지 ===== */}
      <section className="section">
        <MenuStoreSection />
      </section>

      {/* ===== 3페이지 ===== */}
      <section className="section">
        <YoutubeSection />
      </section>

      {/* ===== 4페이지 ===== */}
      <section className="section">
        <NewFamilySection />
      </section>

      {/* ===== 5페이지 ===== */}
      <section className="section">
        <NewsSection />
      </section>

      {/* ===== 6페이지 ===== */}
      <Footer />
    </div>
  );
}

export default App;
