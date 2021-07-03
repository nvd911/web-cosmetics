import React from "react";
import PropTypes from "prop-types";
import "./more.scss";

function More(props) {
  return (
    <div className="row">
      <div className="more col-xs-12 col-sm-12 col-md 12 col-lg-6 col-xl-6 col-xxl-6">
        <span className="more__title--1">Thơm Thảo - An Lành - Thanh Sạch</span>
        <h3 className="more__title--2">Vì sao khách hàng chọn GUO?</h3>
        <p className="more__des">
          <b>Điều đặc biệt </b> ở chúng tôi là từ những sản phẩm xanh sạch,
          chúng tôi thổi vào đó chút tấm lòng và yêu thương! Có lẽ nhờ hai từ
          “tử tế” mà khách hàng dành cho là lý do để GUO Mỹ phẩm xanh sạch phát
          triển đến đến hôm nay! Và cả may mắn nữa, phải rất rất may mắn thì
          chúng ta mới có thể gặp nhau giữa một Xã Hội bao la thế này!
        </p>
      </div>
      <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
        <img
          className="more__image"
          src="https://guo.vn/wp-content/uploads/2017/02/cua-hang-my-pham-xanh-sach-GUO.jpg"
          alt="Mỹ phẩm xanh sạch"
        />
      </div>
    </div>
  );
}

More.propTypes = {};

export default More;
