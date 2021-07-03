import React from "react";
import PropTypes from "prop-types";
import "./review.scss";

function Review(props) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide container review"
      data-ride="carousel"
    >
      <h2 className="review__title">REVIEW - Sản Phẩm</h2>
      <p>-</p>
      <div className="carousel-inner review__text">
        <div className="carousel-item active review__text--item">
          <p>
            Ai thích xài srm k bọt thì nên mua ở đây . Xài cực thích ạ , rửa
            xong cảm giác mặt nó k hề bị khô như những srm khác, rửa mặt xong
            tầm 1h sau vẫn nghe đc thoang thoảng mùi thơm của srm . Với chiết
            xuất từ than tre với tràm trà thì cực kì phù hợp với những bạn da
            dầu mụn giống mình . Mong là xài dài lâu sẽ cho lại kqua tốt . Tks
            Guo nhiều nhiều lắm...
          </p>
          <i className="fas fa-user-tie"></i>
          <span className="review__avater">Nguyet Trinh</span>
        </div>
        <div className="carousel-item review__text--item">
          <p>
            Lần đầu viết review cũng bởi vì nhận hàng ưng quá nên phải share
            ngay (Mình là mẹ bầu nên khá khó tính khi chọn mỹ phẩm). Son dưỡng
            mềm môi kinh khủng, sáng dậy môi còn có 1 lớp da chết bong ra nữa
            nên môi cảm giác lúc nào cũng căng bóng dễ chịu, mùi son lại thơm
            nữa. Son màu mình dùng son matte màu valencio, màu này màu cam đất,
            bình thường cam đất khó lên đúng tông, vậy mà son lên màu khá chuẩn,
            đúng tông cam đất nhìn yêu lắm, chất son matte mềm không hề khô môi,
            mà thơm nữa. Nói chung là rất ưng màu son luôn Tóm lại là ưng, và
            đang đặt thêm hàng của shop rồi :))....
          </p>
          <i className="fas fa-user-tie"></i>
          <span className="review__avater">Phạm Thuỳ Trang</span>
        </div>
        <div className="carousel-item review__text--item">
          <p>
            Mình không quá quan trọng về texture, nhưng tiêu chí đầu tiên khi
            chọn son của mình là phải sạch. Trước cũng thử nhiều loại, cũng của
            hãng có tên tuổi, nhưng được mấy hôm , thấy hãi quá cho hết vào sọt
            rác. Rồi đổi qua handmade, nhiều hãng cam kết 100% không chì mà kết
            quả vẫn thế =)) Chuyển hẳn qua Dior Addicted, nhưng để dùng thường
            xuyên thì không dư dả, mà em này chỉ dưỡng thôi, chứ ra ngoài là
            phải có son màu =)) Đến khi dùng son của Guo thì hơn cả mong đợi =))
            sạch thì không nói, mà texture thấy thích lắm, cả màu cả dưỡng, mềm,
            không nặng môi như Dior hay DHC. Còn cả tinh thần phục vụ của shop
            nữa, store thì mình chưa biết, nhưng online thì tuyệt, từ cách tư
            vấn, đáp ứng yêu cầu của khách(mình cực sastified),
          </p>
          <i className="fas fa-user-tie"></i>
          <span className="review__avater">Lan Hương</span>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

Review.propTypes = {};

export default Review;
