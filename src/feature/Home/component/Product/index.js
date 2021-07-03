import React, { useState } from "react";
import JSAlert from "js-alert";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { onAddToCart, onGetCart } from "../../../Cart/cartSlice";
import { onTotalDefault } from "../../../Cart/totalSlice";
import { Link } from "react-router-dom";
import "./product.scss";
import { onGetDetail } from "../../../Products/cartDetailSlice";

function Product(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isCart, setIsCart] = useState(null);

  const { product } = props;

  const addToCart = () => {
    const res = JSON.parse(localStorage.getItem("cart"));
    const data = res.push(product);
    localStorage.setItem("cart", JSON.stringify(data));
    dispatch(onAddToCart(product));
    const isCart = res.find((item) => item.id === product.id);
    setIsCart(isCart);
    JSAlert.alert("Thêm vào giỏ hàng thành công!");
  };

  const showTotal = () => {
    var sum = 0;
    cart.map((item) => (sum += item.quantity * item.price));
    dispatch(onTotalDefault(sum));
  };

  return (
    <div className="product col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
      <Link
        to={`/san-pham/${product.id}/${product.name}`}
        className="product__image"
      >
        <img
          onClick={() => {
            dispatch(onGetDetail(product));
          }}
          className="product__image"
          src={product.image}
          alt={product.name}
        />
      </Link>
      {isCart ? (
        <Link onClick={showTotal} className="product__link" to="/gio-hang">
          Xem Giỏ Hàng
        </Link>
      ) : (
        <button onClick={addToCart} className="product__btn">
          Thêm vào giỏ hàng
        </button>
      )}

      <Link to="/" className="product__name">
        {product.name}
      </Link>
      <p className="product__price">
        {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} đ
      </p>
    </div>
  );
}

Product.propTypes = {};

export default Product;
