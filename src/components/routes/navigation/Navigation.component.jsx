import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { CartContext } from "../../../contexts/CartContext";
import CartIcon from "../../cart-icon/CartIcon.component";
import CartDropdown from "../../cart-dropdown/CartDropdown.component";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import { ReactComponent as FsLogo } from "../../../assets/fashion-street-logo.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  //everytime the currentUSer state value stored in the UserContext changes,it triggers a rerender in every other component which is using that "currentUser" state value
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
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
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
