import { NavLink } from "react-router-dom";
import "./SubLayout.css";

function SubLayout({ title, desc, tabs = [], children }) {
  return (
    <div className="sub-layout">
      {/* ===============================
          SUB VISUAL
      =============================== */}
      <section className="sub-visual">
        <h2 className="sub-title">{title}</h2>
        {desc && <p className="sub-desc">{desc}</p>}
      </section>

      {/* ===============================
          SUB TAB
      =============================== */}
      {tabs.length > 0 && (
        <div className="sub-tab-wrap">
          <ul className="sub-tab">
            {tabs.map((tab, i) => (
              <li key={i}>
                <NavLink
                  to={tab.path}
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  {tab.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ===============================
          PAGE CONTENT
      =============================== */}
      <div className="sub-content">
        {children}
      </div>
    </div>
  );
}

export default SubLayout;
