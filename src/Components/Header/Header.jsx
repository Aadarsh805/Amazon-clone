import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
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

        <input type="text" className="header__searchInput" / >
        <SearchIcon className="header__searchIcon"/>
    </nav>
  );
};

export default Header;
