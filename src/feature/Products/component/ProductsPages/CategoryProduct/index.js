import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import "./cateroryProduct.scss";

import Button from "../Button";

function CategoryProduct(props) {
  const btnSkin = useSelector((state) => state.btnSkin);

  const skin = [
    "Sữa rửa mặt (1)",
    "Dầu tẩy trang (1)",
    "Dầu rửa mặt (1)",
    "Toner (1)",
    "Mặt nạ (1)",
    "Kem trị mụn (1)",
    "Kem phục hồi (1)",
    "Kem dưỡng ẩm (1)",
    "Kem dưỡng trắng (1)",
    "Serum chấm mụn (1)",
  ];

  const lipstick = [
    "Son sáp lỳ (10)",
    "Son kem lỳ (6)",
    "Son dưỡng (1)",
    "Tẩy da chết (1)",
    "Tẩy trang môi (1)",
  ];

  return (
    <div className="category-product col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
      <div className="category-product__title">DANH MỤC SẢN PHẨM</div>
      <Button showBtnLink={skin} id="toggle-btn1">
        Chăm Sóc Da
      </Button>
      <Button showBtnLink={lipstick} id="toggle-btn2">
        Chăm Sóc Môi
      </Button>
    </div>
  );
}

CategoryProduct.propTypes = {};

export default CategoryProduct;
