import {LOGO_URL} from '../utils/constant';

const Header = () => {
    return (
      <div className="header">
        <div className="food-logo">
          <img
            src={LOGO_URL}
            alt="food logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;