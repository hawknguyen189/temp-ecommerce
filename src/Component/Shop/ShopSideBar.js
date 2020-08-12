import React from "react";

const ShopSideBar = ({category}) => {
  return (
    <div className="col-sm-3" id="sidebar">
      <div className="search-shop pt-2">
        <input
          type="search"
          className="form-control ds-input"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
      <div className="category pt-2">
        <h3 className="shop-heading">Categories</h3>
        <ul className="list-group list-group-flush">
          {category.map((e, index) => {
            return (
              <li className="list-group-item list-category" key={index}>
                {e.toUpperCase()}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="price-filter pt-2">
        <h3 className="shop-heading">Filter by Price</h3>
        <div className="progress row">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "75%" }}
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="row pt-2 justify-content-end">
          <button className="btn btn-secondary col-sm-4">Filter</button>
          <p className="col-sm-8">Price Range</p>
        </div>
      </div>
      <div className="best-seller pt-2">
        <h3 className="shop-heading">Best Sellers</h3>
      </div>
    </div>
  );
};

export default ShopSideBar;
