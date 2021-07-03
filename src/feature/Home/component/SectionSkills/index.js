import React from "react";
import PropTypes from "prop-types";
import "./sectionSkills.scss";
import Skills from "../Skills";
import SkillsText from "../SkillsText";

function SectionSkills(props) {
  const skills = [
    { icon: "fa-star", text: "Mỹ Phẩm Xanh Sạch", name: "#1" },
    { icon: "fa-user-friends", text: "Khách Hàng Hài Lòng", name: "98%" },
    { icon: "fa-chart-bar", text: "Khách Hàng Tin Dùng", name: "35283" },
    { icon: "fa-chart-line", text: "Là Thương Hiệu Uy Tín", name: "6năm" },
  ];

  const showSkills = (skills) => {
    var result = null;
    result = skills.map((item, index) => {
      return (
        <div
          key={index}
          className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3"
        >
          <Skills icon={item.icon} name={item.name}>
            {item.text}
          </Skills>
        </div>
      );
    });
    return result;
  };

  return (
    <div className="section-skills ">
      <SkillsText></SkillsText>
      <div className="row">{showSkills(skills)}</div>
    </div>
  );
}

SectionSkills.propTypes = {};

export default SectionSkills;
