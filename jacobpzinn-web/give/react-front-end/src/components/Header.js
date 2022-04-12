import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import giveLogo from "../assets/give-sm.png";
import avatar from "../assets/avatar.png";
import closeHeaderImg from "../assets/close_black_24dp.svg";
import menuHeaderImg from "../assets/menu_black_24dp.svg";
import { NavItem } from "./styles/NavItem.styled";
import { StyledHeader } from "./styles/Header.styled";
import { Navigation } from "./styles/Navigation.styled";

const Header = () => {
  const [mobileHeaderVisible, setMobileHeaderVisible] = useState(false);
  const location = useLocation();

  const toggle = function () {
    console.log(location.pathname === "/profile");
    console.log(`${location.pathname === "/profile" && true}`);
    setMobileHeaderVisible(!mobileHeaderVisible);
  };

  return (
    <StyledHeader>
      <div>
        <a href="/">
          <img className="logo" src={giveLogo} alt="give logo" />
        </a>
      </div>

        <nav>
          <Navigation openMobileMenu={mobileHeaderVisible}>
            <div className={mobileHeaderVisible ? "nav-column" : "nav-row"}>
              <div className={mobileHeaderVisible ? "nav-column" : "flex"}>
                <NavItem isActive={location.pathname === "/"}>
                  <NavLink to="/">home</NavLink>
                </NavItem>
                <NavItem isActive={location.pathname === "/inspiration"}>
                  <NavLink to="/inspiration">inspiration</NavLink>
                </NavItem>
                <NavItem isActive={location.pathname === "/profile"}>
                  <NavLink to="/profile">profile</NavLink>
                </NavItem>
              </div>
              <div className={mobileHeaderVisible ? "nav-column" : "flex"}>
                <NavItem isActive={location.pathname === "/login"}>
                  <NavLink to="login">login</NavLink>
                </NavItem>
                <NavItem isActive={location.pathname === "/signup"}>
                  <NavLink to="signup">signup</NavLink>
                </NavItem>
              </div>
            </div>
          </Navigation>
        </nav>

        <img
          src={avatar}
          className={`profile ${mobileHeaderVisible && "profile-mobile"}`}
        />

      <img
        onClick={toggle}
        style={mobileHeaderVisible ? { WebkitFilter: "invert(100%)" } : {}}
        className="mobile-nav-toggle"
        src={mobileHeaderVisible ? closeHeaderImg : menuHeaderImg}
        alt="give logo"
      />

    </StyledHeader>
  );
};

export default Header;
