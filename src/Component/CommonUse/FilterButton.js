import React, { useContext } from "react";
import "./FilterButton.scss";
import { StoreContext } from "../Context/StoreContext";
import { ProductsContext } from "../Context/ProductsContext";

const FilterButton = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [tag, setTag] = React.useContext(StoreContext);
  const { category } = useContext(ProductsContext);
  const handleFilterButton = (event) => {
    // event.persist(); //without this the event will return only null, this is for react performance purpose
    const filterData = event.target.dataset.filterValue.split("-");
    setTag(filterData);
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
