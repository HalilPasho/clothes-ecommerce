import React from "react";
import "./CardIconStyless.scss";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../Store/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../Store/cart/card.actions";
import { ReactComponent as ShoppingCard } from "../../assets/shopping-bag.svg";

const CardIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCard className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
