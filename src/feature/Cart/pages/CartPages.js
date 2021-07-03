import { Button } from "reactstrap";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../component/CartItem";
import MessagePay from "../component/MessagePay";
import { onTotalDefault } from "../totalSlice";
import "./cartPages.scss";

function Cart(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);

  useEffect(() => {
    dispatch(onTotalDefault(showTotal(products)));
  }, []);

  const showProduct = (products) => {
    let result = null;
    result = products.map((product, index) => {
      return (
        <CartItem
          key={index}
          showTotal={showTotal(products)}
          product={product}
        ></CartItem>
      );
    });
    return result;
  };

  const showTotal = (products) => {
    let sum = 0;
    products.map((item) => (sum += item.price * item.quantity));
    return sum;
  };

  const totalMessageBtn = () => {
    dispatch(onTotalDefault(showTotal(products)));
  };

  return (
    <div className="cart-pages ">
      <div className="cart-pages__title">Giỏ Hàng</div>
      <table className="table table-hover">
        <thead>
          <tr className="cart-pages__top">
            <th className="cart-pages__col">Sản phẩm</th>
            <th className="cart-pages__col">Giá</th>
            <th className="cart-pages__col ">Số lượng</th>
            <th className="cart-pages__col">Tổng cộng</th>
          </tr>
        </thead>

        <tbody>{showProduct(products)}</tbody>
      </table>
      <Button
        className="btn btn-success btn-lg cart-pages__btn "
        onClick={totalMessageBtn}
      >
        Cập nhật giỏ hàng
      </Button>
      <MessagePay total={total} />

      <Link
        onClick={totalMessageBtn}
        to="/thanh-toan"
        className="btn btn-primary btn-lg cart-pages__btn "
      >
        Thanh Toán
      </Link>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
