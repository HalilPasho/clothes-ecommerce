import React from "react";
import "./CardDropdownStyles.scss";
import CustomButton from "../custom-button/CustomButton";

const CardDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CardDropdown;
