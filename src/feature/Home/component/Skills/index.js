import React from "react";
import PropTypes from "prop-types";
import "./skills.scss";

const Skills = (props) => {
  const { icon, children, name } = props;

  return (
    <div className="skills">
      <i className={`fas ${icon} skills__icon1`}></i>
      <div>
        <span className="skills__icon--t">{name}</span>
      </div>
      <h3 className="skills__text">{children}</h3>
    </div>
  );
};

Skills.propTypes = {};

export default Skills;
