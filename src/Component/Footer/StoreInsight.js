import React from "react";

const StoreInsight = () => {
  return (
    <div className="col-sm-2 store-insight">
      <h3 className="footer-header mb-4">Store Insights</h3>
      <ul className="list-unstyled insight-list">
        <li className="mb-3">
          <a href="">New Products</a>
        </li>
        <li className="mb-3">
          <a href="">Top Sellers</a>
        </li>
        <li className="mb-3">
          <a href="">Our Blogs</a>
        </li>
        <li className="mb-3">
          <a href="">About Our Shop</a>
        </li>
        <li className="mb-3">
          <a href="">Secure Shopping</a>
        </li>
      </ul>
    </div>
  );
};

export default StoreInsight;
