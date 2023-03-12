import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { ReactComponent as FsLogo } from "../../../assets/fashion-street-logo.svg";
import "./navigation.styles.scss";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
const Navigation = () => {
  //everytime the currentUSer state value stored in the UserContext changes,it triggers a rerender in every other component which is using that "currentUser" state value
  const { currentUser } = useContext(UserContext);

  const logoutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <FsLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={logoutHandler}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
