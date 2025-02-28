import { IoIosPerson } from "react-icons/io";
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { SlHandbag } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector((store) => store.Bag);
  return (
    <header>
      <div className="logo_container">
        <Link to="/home">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <IoIosPerson />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaRegFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <SlHandbag />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;
