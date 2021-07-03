import React from "react";
import PropTypes from "prop-types";
import "./highlights.scss";
import { Link } from "react-router-dom";

function Highlights(props) {
  const { highlights } = props;

  return (
    <div className="highlights col-xs col-sm col-md col-lg col-xl col-xxl">
      <Link to="/san-pham/1/Sữa%20Rửa%20Mặt%20Than%20Tre%20Tràm%20Trà%20GUO%20-%20Acne%20Solution%20Cleansing%20Cream%20GUO">
        <img
          className="highlights__image"
          src={highlights.image}
          alt={highlights.name}
        />
        <p className="highlights__text">{highlights.name}</p>
      </Link>
    </div>
  );
}

Highlights.propTypes = {};

export default Highlights;
