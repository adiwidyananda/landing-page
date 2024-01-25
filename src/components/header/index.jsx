import { useState } from "react";
import cx from "classnames";
import Logo from "@assets/logo.png";
import { useLocation } from "react-router-dom";
import NotificationIcon from "@assets/notification-icon.svg";
import BagIcon from "@assets/bag-icon.svg";
import SearchIcon from "@assets/search-icon.svg";
import Hamburger from "@assets/hamburger.svg";
import CloseIcon from "@assets/close.svg";

function Header() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  return (
    <div className="header">
      <div className="header-menu">
        <div className="header-menu-left">
          <img src={Logo} className="header-menu-left-logo" alt="" />
        </div>
        <div className="header-menu-middle">
          <h3
            className={cx(
              pathname === "/"
                ? "header-menu-middle-item-active"
                : "header-menu-middle-item"
            )}
          >
            Home
          </h3>
          <h3 className="header-menu-middle-item">About Us</h3>
          <h3 className="header-menu-middle-item">Product</h3>
          <h3 className="header-menu-middle-item">News & Event</h3>
          <h3 className="header-menu-middle-item">Beranda</h3>
        </div>
        <div className="header-menu-right">
          <img
            src={BagIcon}
            className="header-menu-right-item"
            alt="bag-icon"
          />
          <img
            src={SearchIcon}
            className="header-menu-right-item"
            alt="search-icon"
          />
          <img
            src={NotificationIcon}
            className="header-menu-right-item"
            alt="notificaiton-icon"
          />
        </div>
        <div className="header-menu-mobile">
          <img
            onClick={() => setVisible(true)}
            src={Hamburger}
            alt="hamburger"
          />
        </div>
      </div>
      <div
        onClick={() => setVisible(false)}
        className={cx("header-overlay", visible && "header-overlay-visible")}
      ></div>
      <div className={cx("header-mobile", visible && "header-mobile-visible")}>
        <div className="header-mobile-box">
          <div className="header-mobile-header cursor-pointer">
            <div
              className="header-mobile-header-close"
              onClick={() => setVisible(false)}
            >
              <img src={CloseIcon} alt="" />
            </div>
          </div>
          <div className="header-mobile-menu">
            <div className="header-mobile-menu-wrapper">
              <h3
                className={cx(
                  pathname === "/"
                    ? "header-menu-middle-item-active"
                    : "header-menu-middle-item"
                )}
              >
                Home
              </h3>
            </div>
            <div className="header-mobile-menu-wrapper">
              <h3 className="header-menu-middle-item">About Us</h3>
            </div>
            <div className="header-mobile-menu-wrapper">
              <h3 className="header-menu-middle-item">Product</h3>
            </div>
            <div className="header-mobile-menu-wrapper">
              <h3 className="header-menu-middle-item">News & Event</h3>
            </div>
            <div className="header-mobile-menu-wrapper">
              <h3 className="header-menu-middle-item">Beranda</h3>
            </div>
          </div>
          <div className="header-mobile-bottom">
            <img
              src={BagIcon}
              className="header-menu-right-item"
              alt="bag-icon"
            />
            <img
              src={SearchIcon}
              className="header-menu-right-item"
              alt="search-icon"
            />
            <img
              src={NotificationIcon}
              className="header-menu-right-item"
              alt="notificaiton-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
