import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CardIcon from "../CardIcon/CardIcon";
import CardDropdwon from "../CradDropdown/CardDropdown";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../Store/cart/cart.selectors";
import { selectCurrentUser } from "../../Store/user.selector";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP{" "}
        </Link>
        <Link className="option" to="/shop">
          CONTACT{" "}
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CardIcon />
      </div>
      {hidden ? null : <CardDropdwon />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
