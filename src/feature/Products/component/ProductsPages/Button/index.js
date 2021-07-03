import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import { Link } from "react-router-dom";

function Button(props) {
  const { id, children, showBtnLink } = props;

  const showLink = (showBtnLink) => {
    let result = null;
    result = showBtnLink.map((item, index) => {
      return (
        <Link to="/" className="button__item">
          {item}
        </Link>
      );
    });
    return result;
  };

  return (
    <div className="button">
      <input className="button__checkbox" type="checkbox" name="" id={id} />

      <label htmlFor={id} className="button__btn">
        <span className="button__icon">+</span> {children}
      </label>
      <div className="button__list">
        <strong className="button__all">ALL</strong>
        {showLink(showBtnLink)}
      </div>
    </div>
  );
}

Button.propTypes = {};

export default Button;
