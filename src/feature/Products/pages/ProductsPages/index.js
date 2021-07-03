import React, { useEffect } from "react";
import productsApi from "../../../../api/productsApi";
import PropTypes from "prop-types";
import "./productPages.scss";
import { useSelector, useDispatch } from "react-redux";
import { onGetProducts } from "../../productsSlice";
import HeadingProduct from "../../../Products/component/ProductsPages/HeadingProduct";
import CategoryProduct from "../../../Products/component/ProductsPages/CategoryProduct";
import Product from "../../../Home/component/Product";
import Promotion from "../../../Home/component/Promotion";

function ProductsPages(props) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productsApi.getProducts();
        dispatch(onGetProducts(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const showProduct = (products) => {
    var result = null;
    result = products.map((product, index) => {
      return <Product key={index} product={product}></Product>;
    });
    return result;
  };
  return (
    <div className="product-page">
      <div className="product-page__heading ">
        <HeadingProduct />
      </div>
      <div className="row">
        <CategoryProduct />
        {showProduct(products)}
      </div>

      <div className="ship">
        <Promotion icon="fa-truck-moving">
          Miễn phí vận chuyển với hoá đơn trên 600k
        </Promotion>
        <p className="ship__text">SHOP NOW!</p>
      </div>
      <div className="product-page__image">
        <img
          className="image-organic"
          src="https://guo.vn/wp-content/uploads/2019/06/banner-son-mau-sap.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

ProductsPages.propTypes = {};

export default ProductsPages;
