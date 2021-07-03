import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";
import LinkFooter from "./LinkFooter";
import InfoFooter from "./InfoFooter";
import ContactFooter from "./ContactFooter";
import EndFooter from "./EndFooter";

function Footer(props) {
  var footerLink = [
    { text: ["Giấy chứng nhận", "Cam kết thương hiệu", "Sứ mệnh – tầm nhìn"] },
    { text: ["Truyền hình HTV", "Báo Phụ Nữ Việt Nam", " Báo Vietnambiz"] },
    {
      text: ["Cảm nhận khách hàng", "Kiến thức sản phẩm", "Combo & Khuyến Mãi"],
    },
  ];

  var footerInfo = [
    {
      title: "Về GUO",
      text: [
        "1. Giới thiệu về GUO",
        "2. Cam kết thương hiệu",
        "3. Sứ mệnh và tầm nhìn",
        "4. Hoạt động doanh nghiệp",
        "5. Liên hệ và Khiếu nại",
        "6. Tuyển Dụng",
        "7. Giấy chứng nhận",
      ],
    },
    {
      title: "Hỗ Trợ Khách Hàng",
      text: [
        "• Ưu đãi thành viên",
        "• Hướng dẫn mua hàng",
        "• Phương thức thanh toán",
        "• Chính sách tích lá",
        "• Chính sách Cộng Tác Viên",
        "• Chính sách vận chuyển",
        "• Chính sách đổi trả",
        "• Chính sách bảo mật",
      ],
    },
    {
      title: "Thông tin cần biết",
      text: [
        "• Kiến thức SKINCARE",
        "• Tài liệu chăm sóc da",
        "• Combo & Khuyến mãi",
        "• Cảm nhận khách hàng",
        "• Tất cả bài viết",
      ],
    },
  ];

  const showFooterLink = (footerLink) => {
    var result = null;
    result = footerLink.map((item, index) => {
      return <LinkFooter key={index}>{item.text}</LinkFooter>;
    });
    return result;
  };

  const showFooterInfo = (footerInfo) => {
    var result = null;
    result = footerInfo.map((item, index) => {
      return (
        <InfoFooter key={index} title={item.title}>
          {item.text}
        </InfoFooter>
      );
    });
    return result;
  };

  return (
    <div className=" footer__main">
      <div className="footer__main__link row">{showFooterLink(footerLink)}</div>
      <div className="footer__main__info row">
        <ContactFooter></ContactFooter>
        {showFooterInfo(footerInfo)}
      </div>
      <EndFooter />
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
