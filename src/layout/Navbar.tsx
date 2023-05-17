import style from "./Layout.module.css";
import logo from "../assets/svg/svg9.svg";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [slideIn, setSlideIn] = useState<boolean>(false);
  function slideNav(): void {
    setSlideIn(!slideIn)
  }

  return (
    <div className={style.Navbar}>
      <div className="container">
        <div className={style.flex_topnav}>
          <div className={style.logo_nav}>
            <img src={logo} alt="" />
          </div>
          <div
            className={`${style.sliding_nav} ${slideIn ? style.pushIn : null}`}
            onClick={slideNav}
          >
            <nav className="navbar">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/shops">Near by Stores</NavLink>
                </li>
              </ul>
            </nav>
            <div className={style.signup_links}>
              <button className={style.signup}>Sign in</button>
              <button className={style.signIn}>Sign up</button>
            </div>
          </div>
          <span onClick={slideNav} className={style.hamburgerMenu}>
            {slideIn ? (
              <IoMdClose className={style.closeMenu} />
              ) : (
              <CgMenuRight />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
