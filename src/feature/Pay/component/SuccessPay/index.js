import React from "react";
import PropTypes from "prop-types";
import "./successPay.scss";
import { Link } from "react-router-dom";

function SuccessPay(props) {
  return (
    <div className="success-pay">
      <h3 className="success-pay__title">Đơn hàng thành công</h3>

      <i className="success-pay__icon far fa-check-circle"></i>

      <span className="success-pay__text">
        Đơn đạt hàng của bạn đã được gửi đi thành công. Chúng tôi sẽ gọi điện
        thoại lại cho bạn trong vòng 24h. Cảm ơn bạn !
      </span>

      <Link className="success-pay__btn btn btn-success" to="/" role="button">
        Quay lại trang chủ
      </Link>
    </div>
  );
}

SuccessPay.propTypes = {};

export default SuccessPay;
