import React from "react";
import Product1 from "../Images/Product1.jpg";
import Product2 from "../Images/Product2.jpg";
import Product3 from "../Images/Product3.jpg";
import Product4 from "../Images/Product4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  const ProductsApi = [
    {
      id: 1,
      Image: Product1,
      title: "high waist trousers",
      price: "₹ 2999",
    },
    {
      id: 2,
      Image: Product2,
      title: "high waist trousers",
      price: "₹ 2999",
    },
    {
      id: 3,
      Image: Product3,
      title: "high waist trousers",
      price: "₹ 2999",
    },
    {
      id: 4,
      Image: Product4,
      title: "high waist trousers",
      price: "₹ 2999",
    },
  ];

  return (
    <div className="products-container">
      {ProductsApi.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="product-img">
            <img src={product.Image} alt="p1" />
          </div>
          <div className="product-data">
            <div className="product-info">
              <h3>{product.title}</h3>
              <span>{product.price}</span>
            </div>
            <FontAwesomeIcon className="save-icon" icon={faBookmark} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
