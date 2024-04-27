import "./Header.css";

import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useState } from "react";

const Header = ({ loggedIn/*, onClickSignup, onClickLogin*/ }) => {
  const currentUser = useContext(CurrentUserContext);
  //const avatar = currentUser ? currentUser.avatar : undefined;
  //const showAvatar = avatar !== "" ? true : false;
 // const current = new Date();
  // const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
  //const name = currentUser ? currentUser.name : "";
  const [hambugerMenuIsOpen, setHambugerMenuIsOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setHambugerMenuIsOpen(!hambugerMenuIsOpen);
  };

  return (
    <header className="header">
      
     {/*<p className="header__date">Today is {date}</p>*/}
      <Link to="/" className="header__home-link">
        Home
      </Link>
      <Link to="/about" className="header__about-link">
        About
      </Link>
      <Link to="/projects" className="header__project-link">
        Projects
      </Link>
      <Link to="/contact" className="header__contact-link">
        Contact
      </Link>
      <div className="header__avatar-logo">
        {loggedIn ? (
          <>
            <Link to="/profile">{currentUser?.name}</Link>
            {/*}<div>
              {showAvatar ? (
                <img className="header__avatar" src={avatar} alt="avatar" />
              ) : (
                <p className="avatar__placeholder">{name[0]?.toUpperCase()}</p>
              )}
            </div>{*/}
          </>
        ) : (
          <>
            {" "}
           {/*} <button
              className="header__signup-button"
              type="text"
              onClick={onClickSignup}
            >
              Sign Up
            </button>
            <button
              className="header__signin-button"
              type="text"
              onClick={onClickLogin}
            >
              Sign In
            </button>{*/}
            <button
              onClick={toggleHamburgerMenu}
              className="header__burger-menu"
              type="button"
        ></button>
            <div
              className={`header__nav_links ${
                hambugerMenuIsOpen ? "header__nav_links_visible" : ""
              }`}
            >
              <Link className="header__nav-home" to="/">Home</Link>
              <Link className="header__nav-about" to="/about">About</Link>
              <Link className="header__nav-projects" to="/projects">Projects</Link>
              <Link className="header__nav-contact" to="/contact">Contact</Link>
              {/*}<button className="header__nav-signin" type="text" onClick={onClickLogin}>
                Sign In
            </button>{*/}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
