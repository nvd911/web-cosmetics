import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import PropTypes from "prop-types";
import "./payPages.scss";
import FormPay from "../../component/FormPay";
import payApi from "../../../../api/payApi";
import { useHistory } from "react-router-dom";
import { onTotalDefault } from "../../../Cart/totalSlice";

function PayPages(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const total = useSelector((state) => state.total);
  const products = useSelector((state) => state.cart);

  useEffect(() => {
    let sum = 0;
    products.map((item) => (sum += item.price * item.quantity));
    dispatch(onTotalDefault(sum));
  }, []);

  const valueSubmit = async (value) => {
    const res = await payApi.addPay(value);
    history.push("/thanh-toan/tao-don-thanh-cong");
  };

  return (
    <div className="pay-page">
      <div className="pay-page__banner">
        <p className="pay-page__thank">Thank You!</p>
        <h2 className="pay-page__title">Thanh Toán</h2>
      </div>

      <div className="pay-page__form-pay">
        <FormPay valueSubmit={valueSubmit} total={total} />
      </div>
    </div>
  );
}

PayPages.propTypes = {};

export default PayPages;
