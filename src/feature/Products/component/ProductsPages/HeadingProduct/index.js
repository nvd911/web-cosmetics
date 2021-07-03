import React from "react";
import PropTypes from "prop-types";
import "./headingProduct.scss";

function HeadingProduct(props) {
  return (
    <div className="heading-product ">
      <p className="heading-product__text--t1">
        Cửa hàng của GUO - Mỹ phẩm xanh sạch
      </p>

      <h1 className="heading-product__text--t2">TRANG SẢN PHẨM</h1>
    </div>
  );
}

HeadingProduct.propTypes = {};

export default HeadingProduct;
