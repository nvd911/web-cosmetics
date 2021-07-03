import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  onDeleteCartProduct,
  onUpdateCartMinus,
  onUpdateCartPlus,
} from "../../cartSlice";
import { onTotalDelete } from "../../totalSlice";
import "./cartItem.scss";

function CartItem(props) {
  const { product, showTotal } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const UpdateCartMinus = () => {
    if (product.quantity > 1) {
      dispatch(onUpdateCartMinus(product.id));
    }
  };

  const UpdateCartPlus = () => {
    dispatch(onUpdateCartPlus(product.id));
  };

  const sumTotal = (product) => {
    return product.price * product.quantity;
  };

  const deleteCartProduct = async () => {
    dispatch(onDeleteCartProduct(product.id));

    const total = {
      showTotal,
      showTotalDelete: sumTotal(product),
    };
    dispatch(onTotalDelete(total));
    if (JSON.parse(localStorage.getItem("cart")).length === 0) {
      history.push("/message-empty");
    }
  };

  return (
    <tr className="cart-item__main">
      <td className="cart-item__col">
        <i
          onClick={deleteCartProduct}
          className="fas fa-times cart-item__times"
        ></i>
        <img
          className="cart-item__image"
          src={product.image}
          alt={product.name}
        />

        <Link className="cart-item__text" to="/san-pham">
          {product.name}
        </Link>
      </td>
      <td className="cart-item__price">
        {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}₫
      </td>
      <td className="cart-item__quantity">
        <i
          onClick={UpdateCartMinus}
          className="fas fa-minus cart-item__icon"
        ></i>
        &nbsp;&nbsp; {product.quantity}
        &nbsp; &nbsp;
        <i onClick={UpdateCartPlus} className="fas fa-plus cart-item__icon"></i>
      </td>
      <td className="cart-item__sum">
        {(product.price * product.quantity)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        ₫
      </td>
    </tr>
  );
}

CartItem.propTypes = {};

export default CartItem;
