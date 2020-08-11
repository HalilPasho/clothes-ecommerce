import React from "react";
import "./CardIconStyless.scss";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../Store/cart/card.actions";
import { ReactComponent as ShoppingCard } from "../../assets/shopping-bag.svg";

const CardIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCard className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CardIcon);
