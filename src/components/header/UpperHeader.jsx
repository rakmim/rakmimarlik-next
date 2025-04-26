import React, { useEffect, useState } from 'react';

import AsideInfo from './AsideInfo';

const UpperHeader = () => {
  const [asideVisible, setAsideVisible] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ASIDE PANEL
      <div className={`aside_info_wrapper ${asideVisible ? 'show' : ''}`}>
        <button className="aside_close" onClick={() => setAsideVisible(false)}>
          Kapat
        </button>
        <div className="aside_content"></div>
        <AsideInfo />
      </div> */}

      {/* HEADER */}
      <header className={`header ${isSticky ? 'bg-dark sticky' : ''}`}>
        <div className="container-fluid">
          <div className="header_inner d-flex align-items-center justify-content-between">
            <div className="logo">
              <a href="/" className="light_logo">
                <img src="/images/logo-light.png" alt="logo" />
              </a>
              <a href="/" className="dark_logo">
                <img src="/images/logo-gray.png" alt="logo" />
              </a>
            </div>

            <div className="header_right_part d-flex align-items-center">
              {/* Aside Toggle
              <button onClick={() => setAsideVisible(true)} className="aside_open">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </button>*/}
              
              {/* Mobile Menu Toggle (still using Bootstrap if needed) */}
              <button
                className="mr_menu_toggle position-relative"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasHome"
                aria-controls="offcanvasHome"
              >
                <span className="bi bi-list" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default UpperHeader;
