import React from "react";
import "./FilterButton.scss";
import { StoreContext } from "../Context/StoreContext";

const FilterButton = props => {
  // eslint-disable-next-line no-unused-vars
  const [tag, setTag] = React.useContext(StoreContext);
  const handleFilterButton = event => {
    // event.persist(); //without this the event will return only null, this is for react performance purpose
    const filterData = event.target.dataset.filterValue.split("-");
    setTag(filterData);
  };
  return (
    <div className="container text-center">
      <div className="row">
        <button
          onClick={handleFilterButton}
          data-filter-value="all"
          className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
        >
          All
        </button>
        <button
          onClick={handleFilterButton}
          data-filter-value="fruit-vegie"
          className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
        >
          FRUIT & VEGIES
        </button>
        <button
          onClick={handleFilterButton}
          data-filter-value="juice"
          className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
        >
          JUICE
        </button>
        <button
          onClick={handleFilterButton}
          data-filter-value="processedFood"
          className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
        >
          PROCESSED FOOD
        </button>
        <button
          onClick={handleFilterButton}
          data-filter-value="skinCare"
          className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
        >
          SKIN CARE
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
