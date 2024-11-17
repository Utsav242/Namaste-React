import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [buttonchanged, setButtonChanged] = useState("Login");
  const handleClickBtn = () => {
    buttonchanged === "Login"
      ? setButtonChanged("Logout")
      : setButtonChanged("Login");
  };

const {loggedInUser} = useContext(UserContext);
console.log("datataat", loggedInUser)

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg items-center">
      <div className="food-logo">
        <img className="w-20" src={LOGO_URL} alt="food logo" />
      </div>
      <div className="">
        <ul className="flex  gap-5 pr-5">
          <li>Online Status :{onlineStatus ? 'greens' : 'red' } </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          {/* <li>Cart</li> */}
          <button className="login-btn" onClick={handleClickBtn}>
            {buttonchanged}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
