import React from "react";
import PropTypes from "prop-types";
import "./description.scss";

function Description(props) {
  return (
    <div className="description row ">
      <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
        <img
          className="description__image"
          src="https://cdn.printgo.vn/uploads/media/772948/mau-logo-tra-sua-1_1584528896.jpg"
          alt="logo"
        />
      </div>

      <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
        <h2 className="description__title">Câu chuyện thương hiệu</h2>
        <p className="description__text">
          GUO là thương hiệu Mỹ phẩm xanh sạch, sản phẩm được làm từ nguyên liệu
          thiên nhiên an lành. Ngoài những thỏi son màu sương sương lộng lẫy,
          GUO còn nổi tiếng với dòng sản phẩm chăm sóc da dịu nhẹ với thành phần
          tràm trà và hoa cúc la mã… tất cả những điều đó đã làm nên vẻ an nhiên
          gần gũi của một thương hiệu mỹ phẩm xanh sạch mang tên GUO
        </p>
      </div>
    </div>
  );
}

Description.propTypes = {};

export default Description;
