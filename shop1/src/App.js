import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import MainBanner from "./components/MainBanner";
import MenuStoreSection from "./components/MenuStoreSection";
import YoutubeSection from "./components/YoutubeSection";
import NewFamilySection from "./components/NewFamilySection";
import NewsSection from "./components/NewsSection";

import { Routes, Route } from "react-router-dom";

import Company from "./pages/Company";
import Brand from "./pages/Brand";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Store from "./pages/Store";
import Franchise from "./pages/Franchise";
import Community from "./pages/Community";

import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        {/* 메인 */}
        <Route
          path="/"
          element={
            <>
              <MainBanner />
              <section className="section">
                <MenuStoreSection />
              </section>
              <section className="section">
                <YoutubeSection />
              </section>
              <section className="section">
                <NewFamilySection />
              </section>
              <section className="section">
                <NewsSection />
              </section>
            </>
          }
        />

        {/* 서브 페이지 */}
        <Route path="/company" element={<Company />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:menuId" element={<MenuDetail />} />
        <Route path="/store" element={<Store />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/community" element={<Community />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
