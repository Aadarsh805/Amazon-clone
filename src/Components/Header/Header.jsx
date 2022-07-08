import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to='/login' className="header__nav--link">
          <div className="header__nav--option">
            <span className="header__nav--optionLineOne">Hello,</span>
            <span className="header__nav--optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to='/' className="header__nav--link">
          <div className="header__nav--option">
            <span className="header__nav--optionLineOne">Returns</span>
            <span className="header__nav--optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to='/' className="header__nav--link">
          <div className="header__nav--option">
            <span className="header__nav--optionLineOne">Your</span>
            <span className="header__nav--optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to='/checkout' className="header__nav--link">
          <div className="header__nav--optionCart">
            <ShoppingCartIcon/>
            <span className="header__nav--optionLineTwo header__cartCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
