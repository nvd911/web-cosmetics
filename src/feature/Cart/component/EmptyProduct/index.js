import { Button } from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./emptyProduct.scss";

function EmptyProduct(props) {
  return (
    <div className="empty-product">
      <div className="empty-product__title">Giỏ Hàng</div>
      <h3 className="empty-product__text">
        Chưa có sản phẩm nào trong giỏ hàng.
      </h3>
      <div className="empty-product__btn">
        <Link className="empty-product__link" to="/">
          <Button className="btn btn-info btn-lg empty-product__btn">
            QUAY TRỞ LẠI CỬA HÀNG
          </Button>
        </Link>
      </div>
    </div>
  );
}

EmptyProduct.propTypes = {};

export default EmptyProduct;
