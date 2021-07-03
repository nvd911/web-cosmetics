import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./shareContainer.scss";
import Share from "../Share";

function ShareContainer(props) {
  const posts = useSelector((state) => state.posts);

  const showPosts = (posts) => {
    let result = null;
    result = posts.map((post, index) => {
      return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
          <Share key={index} post={post}></Share>;
        </div>
      );
    });
    return result;
  };
  return (
    <div className="row share-container">
      <div className="col-12 share-container__title">
        <h3 className=" share-container--text1">Mỗi ngày - Mỗi đẹp hơn</h3>
        <h2 className="share-container--text2">
          <b>GÓC CHIA SẺ - </b> LÀM ĐẸP
        </h2>
      </div>
      {showPosts(posts)}
    </div>
  );
}

ShareContainer.propTypes = {};

export default ShareContainer;
