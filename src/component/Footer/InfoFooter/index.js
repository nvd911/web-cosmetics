import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./footerInfo.scss";

function FooterInfo(props) {
  const { title, children } = props;

  const content = () => {
    var result = null;
    result = children.map((item, index) => {
      return (
        <li className="footer-info__item">
          <Link to="/" className="footer-info__link">
            {item}
          </Link>
        </li>
      );
    });

    return result;
  };

  return (
    <div className="footer-info col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
      <h3 className="footer-info__title">{title}</h3>
      <ul className="footer-info__list">{content()}</ul>
    </div>
  );
}

FooterInfo.propTypes = {};

export default FooterInfo;
