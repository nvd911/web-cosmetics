import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Carousel from "../Home/component/Carousel";
import Heading from "../Home/component/Heading";
import Highlights from "../Home/component/Highlights";
import Description from "../Home/component/Description";
import Product from "../Home/component/Product";
import SectionSkills from "../Home/component/SectionSkills";
import More from "../Home/component/More";
import PromotionContainer from "../Home/component/PromotionContainer";
import Review from "../Home/component/Review";
import ShareContainer from "../Posts/component/ShareContainer";
import { useSelector } from "react-redux";
import { onGetProducts } from "../Products/productsSlice";
import productsApi from "../../api/productsApi";
import "./home.scss";
import { onGetPosts } from "../Posts/postSlice";
import postsApi from "../../api/postsApi";

function HomePages(props) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const highlights = [
    {
      image: "https://guo.vn/wp-content/uploads/2021/01/icon-sua-rua-mat.png",
      name: "Cleansers",
    },
    {
      image: "https://guo.vn/wp-content/uploads/2021/01/icon-toner.png",
      name: "Toner",
    },
    {
      image: "https://guo.vn/wp-content/uploads/2021/01/icon-kem-duong.png",
      name: "Cream",
    },
    {
      image: "https://guo.vn/wp-content/uploads/2021/01/icon-dau-tay-trang.png",
      name: "Serum",
    },
    {
      image: "https://guo.vn/wp-content/uploads/2021/01/Untitled-2.png",
      name: "Serum",
    },
    {
      image: "https://guo.vn/wp-content/uploads/2021/01/icon-son-mau.png",
      name: "Lipsticks",
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await productsApi.getProducts();
        const posts = await postsApi.getPosts();
        dispatch(onGetProducts(products));
        dispatch(onGetPosts(posts));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const showProduct = (products) => {
    let result = null;
    result = products.map((product, index) => {
      return <Product key={index} product={product}></Product>;
    });
    return result;
  };

  const showHighlights = (highlights) => {
    let result = null;
    result = highlights.map((item, index) => {
      return <Highlights key={index} highlights={item}></Highlights>;
    });
    return result;
  };
  return (
    <div className="home">
      <Carousel></Carousel>
      <Heading></Heading>
      <div className="home__highlights row"> {showHighlights(highlights)}</div>
      <Description></Description>
      <div className="row">{showProduct(products)}</div>

      <SectionSkills></SectionSkills>

      <More></More>

      <PromotionContainer></PromotionContainer>

      <Review></Review>
      <ShareContainer></ShareContainer>
    </div>
  );
}

HomePages.propTypes = {};

export default HomePages;
