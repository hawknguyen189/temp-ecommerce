import React, { useContext } from "react";
import "./FilterButton.scss";
import { StoreContext } from "../Context/StoreContext";
import { ProductsContext } from "../Context/ProductsContext";

const FilterButton = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { productHome, setProductHome } = React.useContext(StoreContext);
  const { category, productData } = useContext(ProductsContext);
  const handleFilterButton = (event) => {
    // event.persist(); //without this the event will return only null, this is for react performance purpose
    const tag = event.target.dataset.filterValue;
    let filteredProducts;
    if (tag.includes("all")) {
      filteredProducts = [...productData]; //copy products array
    } else {
      filteredProducts = productData.filter((product) => {
        let showProduct = false;
        for (let i = 0; i < tag.length; i++) {
          if (product.fields.tags.includes(tag[i])) {
            showProduct = true;
            break;
          }
        }
        return showProduct === true;
      });
    }
    setProductHome(filteredProducts);
  };
  return (
    <div className="container text-center">
      <div className="row">
        {category.map((e, index) => {
          return (
            <button
              onClick={handleFilterButton}
              data-filter-value={e}
              className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
              key={index}
            >
              {e.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterButton;
