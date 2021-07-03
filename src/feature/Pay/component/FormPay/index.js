import React from "react";
import { Formik, FastField, Form } from "formik";
import * as yup from "yup";

import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import "./formPay.scss";
import InputFileld from "../../../../CustomField/InputFileld";
import MessagePay from "../../../Cart/component/MessagePay";
import { Button } from "reactstrap";
import { onGetCart } from "../../../Cart/cartSlice";

function FormPay(props) {
  const dispatch = useDispatch();
  const { total, valueSubmit } = props;
  const auth = useSelector((state) => state.auth);
  var initialValues = {
    name: "",
    address: "",
    phone: "",
    email: "",
    note: "",
  };

  let validationSchema = yup.object().shape({
    name: yup.string().required("Bạn chưa nhập thông tin"),
    address: yup.string().required("Bạn chưa nhập địa chỉ"),
    phone: yup.string().required("Bạn chưa nhập số điện thoại"),
    email: yup.string(),
    note: yup.string(),
  });

  const onSubmit = (value) => {
    valueSubmit(value);
    localStorage.setItem("cart", JSON.stringify([]));
    const cart = JSON.parse(localStorage.getItem("cart"));
    dispatch(onGetCart(cart));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      className="form-pay row"
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, touched, errors, isSubmitting } = formikProps;

        return (
          <Form className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3">
              <h3 className="form__pay">Thanh toán và giao hàng</h3>
              <FastField
                name="name"
                component={InputFileld}
                label="Họ Tên * "
                type="text"
                placeholder={auth ? auth : "Bắt buộc"}
              ></FastField>

              <FastField
                name="address"
                component={InputFileld}
                label="Địa chỉ *"
                type="text"
                placeholder="Bắt buộc"
              ></FastField>

              <FastField
                name="phone"
                component={InputFileld}
                label="Số điện thoại *"
                type="number"
                placeholder="Bắt buộc"
              ></FastField>

              <FastField
                name="email"
                component={InputFileld}
                label="Địa chỉ email "
                type="email"
                placeholder="Không bắt buộc"
              ></FastField>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 col-xxl-3">
              <h3 className="form__pay">Thông tin thêm</h3>
              <FastField
                name="note"
                component={InputFileld}
                label="Ghi chú đơn hàng "
                type="textarea"
                placeholder="Ví dụ: Giao hàng giờ hành chính"
              ></FastField>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
              <h3 className="form__pay">Đơn hàng của bạn</h3>
              <MessagePay total={total} />
            </div>
            <div className="form__pay__main col-12">
              <Button
                className="form__pay__btn btn btn-warning btn-lg "
                type="submit"
              >
                ĐẶT HÀNG &nbsp;
                {isSubmitting && (
                  <div class="spinner-border text-warning" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                )}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

FormPay.propTypes = {};

export default FormPay;
