import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonchanged, setButtonChanged] = useState("Login");
  const handleClickBtn = () => {
    buttonchanged === "Login"
      ? setButtonChanged("Logout")
      : setButtonChanged("Login");
  };
  return (
    <div className="header">
      <div className="food-logo">
        <img src={LOGO_URL} alt="food logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li>Cart</li> */}
          <button className="login-btn" onClick={handleClickBtn}>
            {buttonchanged}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
