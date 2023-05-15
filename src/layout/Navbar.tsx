import style from "./Layout.module.css";
import logo from "../assets/svg/svg9.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.Navbar}>
      <div className="container">
        <div className={style.flex_topnav}>
          <div className={style.logo_nav}>
            <img src={logo} alt="" />
          </div>
          <div className={style.sliding_nav}>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
