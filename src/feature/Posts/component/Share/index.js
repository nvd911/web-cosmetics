import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./share.scss";

function Share(props) {
  const { post } = props;

  return (
    <div className="share container">
      <img className="share__image" src={post.image} alt={post.name} />
      <Link to="/" className="share__title">
        {post.name}
      </Link>
      <span className="share__text">{post.text}</span>
    </div>
  );
}

Share.propTypes = {};

export default Share;
