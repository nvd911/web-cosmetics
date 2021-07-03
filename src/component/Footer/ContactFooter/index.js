import React from "react";
import PropTypes from "prop-types";
import "./contactFooter.scss";

function ContactFooter(props) {
  return (
    <div className="contact-footer col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
      <p className="contact-footer__text">
        <b>* Hotline</b>: 0977.807.771
      </p>
      <p className="contact-footer__text">
        <b>* Email</b>: Info@guo.vn
      </p>
      <p className="contact-footer__text">
        <b>* Opentime</b>: everyday | 9am – 9pm
      </p>
      <p className="contact-footer__text">
        <b>* Add </b>:
        <a href="#" className="contact-footer__link">
          197 Võ Văn Tần, Phường 5, Quận 3, TP. Hồ Chí Minh
        </a>
      </p>
    </div>
  );
}

ContactFooter.propTypes = {};

export default ContactFooter;
