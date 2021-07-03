import React from "react";
import PropTypes from "prop-types";
import "./promotion.scss";
import { Link } from "react-router-dom";

function Promotion(props) {
  const { icon, children, size } = props;
  return (
    <div className={`promotion promotion__${size}`}>
      <i className={`promotion__chat fas ${icon} promotion__${size}`}></i>
      <Link to="/" className={`promotion__text promotion__${size}`}>
        {children}
      </Link>
    </div>
  );
}

Promotion.propTypes = {};

export default Promotion;
