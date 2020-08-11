import React, {useContext} from "react";
import "./FilterButton.scss";
import { StoreContext } from "../Context/StoreContext";
import { ProductsContext } from "../Context/ProductsContext";

const FilterButton = props => {
  // eslint-disable-next-line no-unused-vars
  const [tag, setTag] = React.useContext(StoreContext);
  const { productData } = useContext(ProductsContext);
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
          data-filter-value="new-arrival"
          className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
        >
          New Arrival
        </button>
        <button
          onClick={handleFilterButton}
          data-filter-value="mask"
          className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
        >
          Face Mask
        </button>
        <button
          onClick={handleFilterButton}
          data-filter-value="glove"
          className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
        >
          Nitrile & Latex Glove
        </button>
        <button
          onClick={handleFilterButton}
          data-filter-value="gown"
          className="col-sm btn btn-outline-info mr-2 ml-2 filter-button"
        >
          Gowns
        </button>
      </div>
    </div>
  );
};

export default FilterButton;
