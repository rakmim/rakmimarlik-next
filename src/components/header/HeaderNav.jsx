import React, { useState } from "react";
import styles from "@/styles/HeaderNav.module.css"; // 👈 doğru import
import navItems from "@/data/navigations";

const HeaderNav = ({ id }) => {
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (index) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className="bg-dark offcanvas offcanvas-start_02"
      tabIndex="-1"
      id={id}
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className={styles.mr_menu_02}>
        <div className={styles.mr_menu_02_overlay}></div>

        <button
          type="button"
          className={styles.mr_menu_02_close}
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="bi bi-x-lg"></i>
        </button>

        <div className={styles.logo}>
          <a href="/" className={styles.light_logo}>
            <img
              style={{ padding: "40px" }}
              src="/images/logo-light.png"
              alt="logo"
            />
          </a>
          <a href="/" className={styles.dark_logo}>
            <img src="/images/logo-dark.png" alt="logo" />
          </a>
        </div>

        <div className={styles.mr_navmenu}>
          <ul className={styles.main_menu}>
            {navItems.map((item, index) => (
              <li key={index} className={styles.menu_item}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
