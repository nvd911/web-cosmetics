import React from "react";
import PropTypes from "prop-types";
import "./footerLink.scss";

function FooterLink(props) {
  const { children } = props;

  const content = () => {
    var result = null;
    result = children.map((item, index) => {
      return (
        <div key={index} className="footer__Link__item">
          <i className="fas fa-gem"></i>
          <a className="footer__Link__text" href="#">
            {item}
          </a>
        </div>
      );
    });

    return result;
  };

  return (
    <div
      className=" 
      footer__Link
      col-xs-12
      col-sm-12
      col-md-4
      col-lg-4
      col-xl-4
      col-xxl-4"
    >
      {content()}
    </div>
  );
}

FooterLink.propTypes = {};

export default FooterLink;
