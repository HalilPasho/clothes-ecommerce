import React from "react";
import "./CardIconStyless.scss";
import { ReactComponent as ShoppingCard } from "../assets/shopping-bag.svg";

const CardIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingCard className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CardIcon;
