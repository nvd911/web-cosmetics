import React from "react";
import PropTypes from "prop-types";
import "./endFooter.scss";

function EndFooter(props) {
  return (
    <div className="end-footer row">
      <div className="end-footer__left col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
        <p className="end-footer__text">
          Copyright 2017 Mỹ phẩm xanh sạch The Herbal Skin, all rights reserved
        </p>
      </div>
      <div className="end-footer__right col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
        <img
          className="end-footer__image"
          src="https://guo.vn/wp-content/uploads/2019/11/certificate-guo.png"
          alt=""
        />
      </div>
    </div>
  );
}

EndFooter.propTypes = {};

export default EndFooter;
