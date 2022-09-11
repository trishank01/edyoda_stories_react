import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <>
      <main className={style.container}>
        <nav className={style.nav_bar}>
          <div className={style.nav_left}>
            <div className={style.details}>
              <h1>EDYODA</h1>
              <p>stories</p>
            </div>
            <div className={style.dropdown}>
                Explore Catogories
                <div className={style.header_icon}>
                <i class="fa-sharp fa-solid fa-chevron-down"></i>
                </div>
            </div>
          </div>

          <div className={style.nav_right}>
            <p>
              EdYoda is free learning and knowledge <br />
              sharing platform for techies
            </p>
            <button>Go To Main Website</button>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Header;
