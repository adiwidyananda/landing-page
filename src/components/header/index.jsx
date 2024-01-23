import Logo from "@assets/logo.png";
import NotificationIcon from "@assets/notification-icon.svg";
import BagIcon from "@assets/bag-icon.svg";
import SearchIcon from "@assets/search-icon.svg";

function Header() {
  return (
    <div className="header">
      <div className="header-menu">
        <div className="header-menu-left">
          <img src={Logo} className="header-menu-left-logo" alt="" />
        </div>
        <div className="header-menu-middle">
          <h3 className="header-menu-middle-item">Home</h3>
          <h3 className="header-menu-middle-item">About Us</h3>
          <h3 className="header-menu-middle-item">Product</h3>
          <h3 className="header-menu-middle-item">News & Event</h3>
          <h3 className="header-menu-middle-item">Beranda</h3>
        </div>
        <div className="header-menu-right">
          <img src={BagIcon} alt="bag-icon" />
          <img src={SearchIcon} alt="search-icon" />
          <img src={NotificationIcon} alt="notificaiton-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
