import React from "react";
import PropTypes from "prop-types";
import Promotion from "../Promotion";
import "./promotionContainer.scss";

function PromotionContainer(props) {
  const promotion = [
    {
      icon: "fa-truck-moving",
      text: "Miễn phí vận chuyển với hoá đơn trên 600k",
    },
    { icon: "fa-comments", text: "Gửi tin nhắn cho GUO qua facebook" },
    { icon: "fa-leaf", text: "Tích lá hôm nay, nhận quà liền tay" },
    { icon: "fa-leaf", text: "100% nguyên liêu thiên nhiên vàvà organic" },
  ];

  const showPromotion = (promotion) => {
    var result = null;
    result = promotion.map((item, index) => {
      return (
        <div
          key={index}
          className="promotion-container__promotion  col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"
        >
          <Promotion icon={item.icon}>{item.text}</Promotion>
        </div>
      );
    });
    return result;
  };
  return (
    <div className="row promotion-container">{showPromotion(promotion)}</div>
  );
}

PromotionContainer.propTypes = {};

export default PromotionContainer;
