import React, { useState } from "react";
import PropTypes from "prop-types";
import "./messagePay.scss";

function MessagePay(props) {
  const { total } = props;
  const ship = total >= 300000 ? 0 : 25000;

  return (
    <div className="message-pay">
      <h3 className="message-pay__text">Tổng thanh toán</h3>
      <table className="table">
        <tr>
          <td className="message-pay__item">
            <b>Thành tiền</b>
          </td>
          <td className="message-pay__item">
            {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₫
          </td>
        </tr>
        <tr>
          <td className="message-pay__item">
            <b>Shipping</b>
          </td>
          <td className="message-pay__item">
            Chuyển Phát Nhanh : &nbsp;
            {ship.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ₫ <br />
            <span className="message-pay__freeShip">
              (Miễn phí ship đơn hàng trên 300,000₫)
            </span>
          </td>
        </tr>
        <tr>
          <td className="message-pay__item">
            <b>Tổng cộng</b>
          </td>
          <td className="message-pay__item">
            <b>
              {(total + ship).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              ₫
            </b>
          </td>
        </tr>
      </table>
    </div>
  );
}

MessagePay.propTypes = {};

export default MessagePay;
