import React from "react";
import PropTypes from "prop-types";
import "./heading.scss";

function Heading(props) {
  return (
    <div>
      <h1 className="heading ">
        <span className="heading--h1 ">Dành cho bạn: </span>
        <span className="heading--h2 "> Vẻ Đẹp An Lành</span>
      </h1>
      <div className="heading__bottom col-12">
        <span>-</span>
      </div>
    </div>
  );
}

Heading.propTypes = {};

export default Heading;
