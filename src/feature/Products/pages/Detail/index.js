import React, { useState } from "react";
import { Button } from "reactstrap";
import JSAlert from "js-alert";

import { useDispatch, useSelector } from "react-redux";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";
import "./detail.scss";
import { Link, useParams } from "react-router-dom";
import Promotion from "../../../Home/component/Promotion";
import {
  onAddToCart,
  onUpdateCartDetail,
  onUpdateCartPlus,
} from "../../../Cart/cartSlice";

const images = [
  {
    original:
      "https://guo.vn/wp-content/uploads/2019/11/Kem-nhung-tuyet-GUO-Rich-Moist-Smoothing-Cream.jpg",
    thumbnail:
      "https://guo.vn/wp-content/uploads/2019/11/Kem-nhung-tuyet-GUO-Rich-Moist-Smoothing-Cream.jpg",
  },
  {
    original:
      "https://guo.vn/wp-content/uploads/2020/03/Kem-nhung-tuyet-v12-6-600x600.jpg",
    thumbnail:
      "https://guo.vn/wp-content/uploads/2020/03/Kem-nhung-tuyet-v12-6-600x600.jpg",
  },
  {
    original:
      "https://guo.vn/wp-content/uploads/2018/01/giay-cong-bo-my-pham-guo-kem-nhung-tuyet.jpg",
    thumbnail:
      "https://guo.vn/wp-content/uploads/2018/01/giay-cong-bo-my-pham-guo-kem-nhung-tuyet.jpg",
  },
  {
    original:
      "https://guo.vn/wp-content/uploads/2018/10/review-SRM-GUO-7-1100x1100.jpg",
    thumbnail:
      "https://guo.vn/wp-content/uploads/2018/10/review-SRM-GUO-7-1100x1100.jpg",
  },
  {
    original:
      "https://guo.vn/wp-content/uploads/2018/10/review-SRM-GUO-2-1100x1100.jpg",
    thumbnail:
      "https://guo.vn/wp-content/uploads/2018/10/review-SRM-GUO-2-1100x1100.jpg",
  },
];

function Detail(props) {
  const { name, id } = useParams();
  const dispatch = useDispatch();
  const cartDetail = useSelector((state) => state.cartDetail);

  var [cart, setCart] = useState(1);

  const onAddCart = () => {
    const res = JSON.parse(localStorage.getItem("cart"));
    if (res.length) {
      const itemCart = res.find((item) => item.id === id);
      if (itemCart) {
        dispatch(onUpdateCartDetail({ id, cart }));
        JSAlert.alert("Thêm vào giỏ hàng thành công!");
        return;
      }
    }
    dispatch(onAddToCart(cartDetail));
  };

  const UpdateCartMinus = () => {
    if (cart > 1) {
      setCart(--cart);
    }
  };

  const UpdateCartPlus = () => {
    setCart(++cart);
  };

  return (
    <div className="detail">
      <div className=" row">
        <div className="detail__title">
          <h2 className="detail__t1">Cửa hàng</h2>
          <span className="detail__t2">
            <Link className="detail__link" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="detail__link" to="/san-pham">
              Sản Phẩm
            </Link>
            &nbsp;/&nbsp;
            {name}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="detail__album col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
          <ImageGallery items={images} />;
        </div>
        <div className="detail__album col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
          <h1 className="detail__name">
            Sữa Rửa Mặt Than Tre Tràm Trà GUO – Acne Solution Cleansing Cream
            GUO
          </h1>
          <div className="detail__smallText">
            <span className="detail__price">230.000 ₫ </span>
            <i className="fas fa-star detail__rating"></i>
            <i className="fas fa-star detail__rating"></i>
            <i className="fas fa-star detail__rating"></i>
            <i className="fas fa-star detail__rating"></i>
            <i className="fas fa-star detail__rating"></i>
            <span className="evaluate">(9 đánh giá của khách hàng)</span>
            <h2 className="detail__textTitle">CÔNG DỤNG</h2>
            <span className="detail__textDes">
              › Làm sạch dịu nhẹ hàng ngày nhưng không gây khô da, căng da{" "}
              <br /> › Dành cho tất cả loại da kể cả da nhạy cảm, dị ứng, kích
              ứng <br /> › Loại bỏ bã nhờn thừa, ngăn ngừa mụn <br /> › Kiềm dầu
              giúp da thông thoáng, phòng tránh tắc nghẽn lỗ chân lông. <br /> ›
              Hạn chế ngăn ngừa mụn đầu đen, mụn trứng cá giúp da luôn thư giãn
              thoải mái. <br /> › Giảm triệu chứng mẫn đỏ, ngứa rát GUO Mỹ Phẩm
              Xanh Sạch (since 2015) – Hành trình lan toả mỹ phẩm thiên nhiên
              “THƠM THẢO – AN LÀNH – XANH SẠCH” -Sản phẩm của GUO an toàn cho
              phụ nữ mang thai và cho con bú.
            </span>

            <p className="detail__scan">
              Mã vạch / Article Number Code: 8938533878013
            </p>

            <p className="detail__commitment">
              (*) Cam kết hoàn tiền trong 07 ngày nếu khách hàng không hài lòng
              về sản phẩm và dịch vụ của GUO
            </p>

            <div>
              <span className="detail__criteria--1">
                Đạt tiêu chí 6 không:{" "}
              </span>
              <span className="detail__criteria--2">
                𝘒𝘏Ô𝘕𝘎 𝘟À 𝘗𝘏Ò𝘕𝘎 – 𝘒𝘏Ô𝘕𝘎 𝘏Ạ𝘛 – 𝘒𝘏Ô𝘕𝘎 𝘊𝘏Ấ𝘛 𝘛Ẩ𝘠 𝘙Ử𝘈 𝘏𝘖Á 𝘏Ọ𝘊 – 𝘒𝘏Ô𝘕𝘎
                𝘗𝘈𝘙𝘈𝘉𝘌𝘕- 𝘒𝘏Ô𝘕𝘎 𝘔À𝘜 𝘛Ổ𝘕𝘎 𝘏Ợ𝘗 – 𝘒𝘏Ô𝘕𝘎 𝘊𝘏Ấ𝘛 𝘛Ạ𝘖 𝘉Ọ𝘛 𝘚𝘜𝘓𝘍𝘈𝘛𝘌
                (𝘚𝘓𝘚/𝘚𝘓𝘌𝘚)
              </span>
            </div>

            <div className="detail__promotion">
              <Promotion icon="fa-truck-moving" size="size-1">
                Freeship hóa đơn trên 600k
              </Promotion>
              &nbsp; &nbsp; &nbsp;
              <Promotion icon="fa-comments" size="size-2">
                Đặt câu hỏi cho GUO ở đây nè!
              </Promotion>
            </div>

            <div className="detail__cart">
              <i
                onClick={UpdateCartMinus}
                className="fas fa-minus detail__item__icon"
              ></i>

              <span className="detail__item__quantity">{cart}</span>
              <i
                onClick={UpdateCartPlus}
                className="fas fa-plus detail__item__icon"
              ></i>
              <Button
                onClick={onAddCart}
                className="btn btn-warning btn-lg detail__btn "
              >
                THÊM VÀO GIỎ
              </Button>
            </div>

            <div className="detail__menu">
              <ul className="detail__list">
                <li className="detail__menu--item">Mô tả</li>
                <li className="detail__menu--item">Thành Phần</li>
                <li className="detail__menu--item">FAQs</li>
                <li className="detail__menu--item">Đánh Giá</li>
              </ul>
            </div>

            <div className="detail__mainMenu">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/LbPyVvvD42A"
              ></iframe>
              <h3 className="detail__mainMenu__title">
                Sữa Rửa Mặt Than Tre Tràm Trà GUO
              </h3>
              <p className="detail__mainMenu__text">
                Sữa rửa mặt than tre tràm trà GUO giúp da được làm sạch một cách
                dịu nhẹ. Với ưu điểm không tạo bọt, chất kem đen-sánh-mịn từ sữa
                rửa mặt giúp hòa tan bụi bẩn, bã nhờn giúp da được làm sạch sâu.{" "}
                <br />
                Với thành phần thiên nhiên, đặc biệt an toàn cho mẹ bầu, những
                làn da dầu mụn và nhạy cảm. Cùng độ pH 5.5 giúp da được cân bằng
                sau rửa mặt. Đồng thời ngăn ngừa mụn hiệu quả với tràm trà và
                than tre hoạt tính. <br /> Sữa rửa mặt tạo bọt có tốt cho da dầu
                nhờn, dễ nổi mụn? Khi da tiết nhiều dầu nhờn và hay gặp mụn,
                nàng thường được khuyên là dùng sữa rửa mặt tạo bọt, kiềm dầu để
                rửa cho sạch. Nhưng nhiều nàng lại gặp tình trạng da căng kích
                và khô ngứa , hơn nữa là bị bong tróc da sau khi rửa mặt, nhất
                là ở nơi khoé miệng và những vùng da mỏng.
              </p>
              <img
                className="detail__mainMenu__image--1"
                src="https://guo.vn/wp-content/uploads/2020/09/sua-rua-mat-kiem-dau-tri-mun-guo-768x1086.jpg"
                alt=""
              />
              <p className="detail__mainMenu__image-des">
                Sữa rửa mặt kiềm dầu – ngừa mụn
              </p>

              <p className="detail__mainMenu__text">
                Vậy liệu sữa rửa mặt tạo bọt có tốt như quảng cáo không, mà thực
                sự da dầu mụn, nhạy cảm thì cần gì? Trong sữa rửa mặt tạo bọt có
                một chất gọi là surfactant. Chúng ở dưới dạng sodium laureth
                sulfate(SLS) hoặc là Sodium Lauryl Sulfate (SLS); đây là chất
                tẩy rửa tạo nhiều bọt khiến da sạch quá mức cần thiết, dần mất
                đi lớp màng bảo vệ chính là lớp dầu tự nhiên khiến cho da bị mất
                cân bằng. Các nàng đã biết rồi đó, dầu và nước là hai chất không
                thể hoà tan vào nhau, mà bã nhờn, kem chống nắng, lớp make up
                đều là kết quả của gốc dầu. Vì thế nước không thể làm sạch được
                nhưng surfactant thì có thể. Bên cạnh đó, một chất surfactant
                tạo bọt nhiều còn phá huỷ bức tường bảo vệ da, đẩy pH của da lên
                rất cao.
              </p>

              <img
                className=" detail__mainMenu__image--1"
                src="https://guo.vn/wp-content/uploads/2020/07/bao-b%C3%AC-srm-m%E1%BB%9Bi-1.jpg"
                alt=""
              />
              <p className="detail__mainMenu__image-des">
                Thay áo mới cho sữa rửa mặt Than Tre Tràm Trà GUO
              </p>
              <img
                className=" detail__mainMenu__image--1"
                src="https://guo.vn/wp-content/uploads/2018/12/feedback-skincare-nha-guo-768x1114.jpg"
                alt=""
              />
              <img
                className=" detail__mainMenu__image--1"
                src="https://guo.vn/wp-content/uploads/2018/03/feedback-skincare-768x1114.jpg"
                alt=""
              />

              <img
                className=" detail__mainMenu__image--1"
                src="https://guo.vn/wp-content/uploads/2018/10/srm.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Detail.propTypes = {};

export default Detail;
