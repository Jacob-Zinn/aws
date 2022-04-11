import { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import giveLogo from "../assets/give-sm.png";
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
          <NavItem isActive={location.pathname === "/"}>
            <NavLink to="/">home</NavLink>
          </NavItem>
          <NavItem isActive={location.pathname === "/inspiration"}>
            <NavLink to="/inspiration">inspiration</NavLink>
          </NavItem>
          <NavItem isActive={location.pathname === "/profile"}>
            <NavLink to="/profile">profile</NavLink>
          </NavItem>
          <NavItem isActive={location.pathname === "/login"}>
            <NavLink to="login">login</NavLink>
          </NavItem>
        </Navigation>
      </nav>

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
