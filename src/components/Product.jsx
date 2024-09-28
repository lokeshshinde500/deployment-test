import React from "react";

export default function Product({ product }) {
  const { title, image, price, rating } = product;

  return (
    <div className="product-item">
      <div className="product-img">
        <img src={image} alt={title} />
      </div>
      <div className="product-content">
        <h3>{title}</h3>
        <p>Rating {rating.rate}</p>
        <p>${price} </p>
      </div>
    </div>
  );
}
