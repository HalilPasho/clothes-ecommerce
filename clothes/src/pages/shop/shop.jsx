import React, { Component } from "react";
import SHOP_PAGE from "./shop.data";
import CollectionPreview from "../../components/preview-collection/preview-collection";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: SHOP_PAGE,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherCollection }) => (
          <CollectionPreview key={id} {...otherCollection} />
        ))}
      </div>
    );
  }
}

export default Shop;
