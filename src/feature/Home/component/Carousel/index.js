import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./carousel.scss";
import PropTypes from "prop-types";

function Carousels(props) {
  return (
    <Carousel className="container carousels">
      <div>
        <img src="https://guo.vn/wp-content/uploads/2017/02/cham-soc-da-cho-ba-bau.jpg" />
      </div>
      <div>
        <img src="https://guo.vn/wp-content/uploads/2017/02/sua-rua-mat-cho-ba-bau.jpg" />
      </div>
      <div>
        <img src="https://guo.vn/wp-content/uploads/2017/02/anh-bia-guo.vn_.jpg" />
      </div>
    </Carousel>
  );
}

Carousels.propTypes = {};

export default Carousels;
