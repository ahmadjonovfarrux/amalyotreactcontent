import YourCart from "../componenets/YourCart";
import { FaShoppingCart } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <nav className="navbar-nav">
          <IoLogoApple className="navbar-apple-icon" />
          {/* <GiHamburgerMenu  /> */}
          <CiMenuBurger className="navbar-burgerBar" />

          <ul className="navbar-list">
            <li className="navbar-item">Home</li>
            <li className="navbar-item">Product</li>
            <li className="navbar-item">Contact</li>
          </ul>
        </nav>
        <div className="navbar-iconBox">
          <div className="navbar-hiddenBox">
            <FaShoppingCart className="navbar-cartIcon" />
            <YourCart />
          </div>

          <button className="btn navbar-btn">Sign in</button>
        </div>
      </div>
    </div>
  );
};
