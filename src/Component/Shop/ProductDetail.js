import React, { useContext } from "react";
import { useRouter } from "../CommonUse/CustomHooks";
import { CartContext } from "../Context/CartContext";
import { useState } from "react";

const ProductDetail = ({ productData }) => {
  const { addProduct, cartItems, increaseQuantity } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  let product;
  if (productData) {
    product = productData.find((e) => e.fields.slug === router.query.slug);
  }
  console.log("slug ", product);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.sys.id === product.sys.id);
  }; //check this item already in cart
  return (
    <div className="product-detail col-sm-9">
      {product && (
        <div className="">
          <div className="row">
            {/* left col for product image */}
            <div className="col-sm-6 card detail-card">
              <img
                src={"https:" + product.fields.image[0].fields.file.url}
                className="card-img-top"
                alt={product.fields.slug}
              />
              <div className="card-body">
                {/* show product image */}
                <div className="row">
                  {product.fields.image.map((e, index) => {
                    return (
                      <img
                        src={"https:" + e.fields.file.url}
                        className="img-thumbnail col-sm-4"
                        alt={e.title}
                        key={index}
                      />
                    );
                  })}
                </div>
                {/* end show product image */}
              </div>
            </div>
            {/* end image */}
            <div className="col-sm-6 product-summary">
              <div className="main-info border-bottom mb-3">
                {product.fields.special && (
                  <div className="badge-div mb-3">
                    {product.fields.special.map((e, index) => {
                      let badgeStyle;
                      if (e.toUpperCase() === "HOT") {
                        badgeStyle = "badge badge-danger";
                      } else {
                        badgeStyle = "badge badge-warning";
                      }
                      return (
                        <span key={index} className={badgeStyle}>
                          {e.toUpperCase()}
                        </span>
                      );
                    })}
                  </div>
                )}
                <h3 className="detail-title ">
                  <span className="border-bottom">
                    {product.fields.productName}
                  </span>
                </h3>

                {product.fields.discountPrice ? (
                  <p className="detail-price pb-3">
                    <span className="strike-price mr-3">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(product.fields.price)}
                    </span>
                    <span className="discount-price">
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(product.fields.discountPrice)}
                    </span>
                  </p>
                ) : (
                  <p className="detail-price pb-3">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                    }).format(product.fields.price)}
                  </p>
                )}

                <p className="pb-3 detail-main-text">
                  {product.fields.productDescription}
                </p>
              </div>
              {/* add quantity to cart & show stock  */}
              <div className="row justify-content-center">
                <div className="col-sm-5 d-flex justify-content-center">
                  <button
                    onClick={() => {
                      if (quantity > 0) {
                        setQuantity(quantity - 1);
                      }
                    }}
                    className="btn btn-danger btn-sm mb-1"
                  >
                    <i className="fas fa-minus"></i>
                  </button>

                  <p className="mx-2 product-quantity">{quantity}</p>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="btn btn-primary btn-sm mr-2 mb-1"
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
                <div className="col-sm-7">
                  <span className="detail-main-text detail-stock">
                    {`${product.fields.quantity} in stock`}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5 py-2">
                  {isInCart(product) && (
                    <a
                      href="/"
                      className="d-flex justify-content-center btn btn-add-cart rounded-pill"
                      onClick={(e) => {
                        e.preventDefault();
                        return increaseQuantity(product, quantity);
                      }}
                    >
                      Add To Cart
                    </a>
                  )}

                  {!isInCart(product) && (
                    <a
                      href="/"
                      className="d-flex justify-content-center btn btn-add-cart rounded-pill"
                      onClick={(e) => {
                        e.preventDefault();
                        addProduct(product);
                        return increaseQuantity(product, quantity - 1);
                      }}
                    >
                      Add To Cart
                    </a>
                  )}
                </div>
                <div className="col-sm-7">
                  <div className="row detail-action">
                    <div className="quick-view d-flex justify-content-center px-2">
                      <a
                        href="/"
                        className="d-flex justify-content-center rounded-circle action-bg border border-light"
                      >
                        <i className="far fa-eye align-self-center"></i>
                      </a>
                    </div>
                    <div className="add-to-compare d-flex justify-content-center px-2">
                      <a
                        href="/"
                        className="rounded-circle d-flex justify-content-center border border-light action-bg"
                      >
                        <i className="fas fa-balance-scale align-self-center"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* end add to cart & stock */}
              {/* categories & social share */}
              <div className="row">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>CATEGORY</th>
                      <td className="detail-main-text   ">
                        {product.fields.categories &&
                          product.fields.categories.map((e, index) => {
                            return <span key={index}>{e.fields.title}</span>;
                          })}
                      </td>
                    </tr>
                    <tr>
                      <th>SHARE</th>
                      <td className="row social-share">
                        <div className="d-flex justify-content-center">
                          <a
                            href="/"
                            className="rounded-circle network-bg d-flex justify-content-center"
                          >
                            <i className="fab fa-facebook align-self-center"></i>
                          </a>
                        </div>
                        <div className="d-flex justify-content-center">
                          <a
                            href="/"
                            className="rounded-circle network-bg d-flex justify-content-center"
                          >
                            <i className="fab fa-twitter align-self-center"></i>
                          </a>
                        </div>
                        <div className="d-flex justify-content-center">
                          <a
                            href="/"
                            className="rounded-circle network-bg d-flex justify-content-center"
                          >
                            <i className="fab fa-instagram align-self-center"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end categories & social share */}
            </div>
            {/* end product summary */}
          </div>
          {/* add product description */}
          <div className="row">
            <div className="col-sm">
              <ul className="nav nav-tabs" id="productTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#review"
                    role="tab"
                    aria-controls="review"
                    aria-selected="false"
                  >
                    Review
                  </a>
                </li>
              </ul>
              <div className="tab-content mt-3">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <p>{product.fields.productDescription}</p>
                </div>
                <div
                  className="tab-pane fade"
                  id="review"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p>{product.fields.productDescription}</p>
                </div>
              </div>
            </div>
          </div>
          {/* end description & review */}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
