import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

const Header = () => {

  const [{cart, user}] = useStateValue()
  const login = () => {
    if(user) {
      auth.signOut()
    }
  }
  
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
        <Link to={!user && '/login'} className="header__nav--link">
          <div onClick={login} className="header__nav--option">
            <span className="header__nav--optionLineOne">Hello,{user?.email}</span>
            <span className="header__nav--optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/' className="header__nav--link">
          <div className="header__nav--option">
            <span className="header__nav--optionLineOne">Returns</span>
            <span className="header__nav--optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to='/checkout' className="header__nav--link">
          <div className="header__nav--optionCart">
            <ShoppingCartIcon/>
            <span className="header__nav--optionLineTwo header__cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
