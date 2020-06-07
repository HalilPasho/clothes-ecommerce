import React from "react";
import "./preview-collection.scss";
import CollectionItems from "../collection-item/collection-item";

const previewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItems key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default previewCollection;
