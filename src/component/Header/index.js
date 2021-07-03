import firebase from "firebase";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { onTotalDefault } from "../../feature/Cart/totalSlice";
import { onSearchBtn } from "../../feature/Posts/searchSlice";
import "./header.scss";

function Header(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const posts = useSelector((state) => state.posts);
  const auth = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");

  const signOut = () => {
    firebase.auth().signOut();
  };

  const showQuantity = () => {
    var sum = 0;
    cart.map((item) => (sum += item.quantity));
    return sum;
  };

  const showTotal = () => {
    var sum = 0;
    cart.map((item) => (sum += item.quantity * item.price));

    dispatch(onTotalDefault(sum));
  };

  const clickLink1 = () => {
    history.push("/");
  };
  const clickLink2 = () => {
    history.push("/san-pham");
  };
  const clickLink3 = () => {
    history.push("/bai-viet");
  };
  const clickLink4 = () => {
    history.push("/chung-nhan");
  };
  const clickLink5 = () => {
    history.push("/lien-he");
  };

  const searchBtn = () => {
    const postFilter = posts.filter((post) => {
      console.log(xoa_dau(post.name));
      return (
        xoa_dau(post.name)
          .toLowerCase()
          .indexOf(xoa_dau(search).toLowerCase()) !== -1
      );
    });
    dispatch(onSearchBtn(postFilter));
  };

  function xoa_dau(str) {
    var space = "%20";
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(space, "");
    return str;
  }

  return (
    <header className="header-nav ">
      <div className=" header ">
        <Link to="/">
          <img
            className="header__logo"
            src="https://guo.vn/wp-content/uploads/2019/11/logo-guo-web.png"
            alt="logo"
          />
        </Link>

        <div className="header__menu">
          <ul className="header__list">
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: "white",
              }}
              className="header__link header__item "
            >
              trang chủ
            </NavLink>

            <NavLink
              to="/san-pham"
              activeStyle={{
                color: "white",
              }}
              className="header__link header__item "
            >
              sản phẩm
            </NavLink>

            <NavLink
              to="/bai-viet"
              activeStyle={{
                color: "white",
              }}
              className="header__link header__item "
            >
              bài viết
            </NavLink>

            <NavLink
              to="/bi-kip-lam-dep"
              activeStyle={{
                color: "white",
              }}
              className="header__link header__item "
            >
              bí kíp làm đẹp
            </NavLink>

            <NavLink
              to="/chung-nhan"
              activeStyle={{
                color: "white",
              }}
              className="header__link header__item "
            >
              chứng nhận
            </NavLink>

            <NavLink
              to="/lien-he"
              activeStyle={{
                color: "white",
              }}
              className="header__link header__item "
            >
              liên hệ
            </NavLink>
          </ul>
        </div>

        <input
          className="header__feature__checkboxSearch"
          type="checkbox"
          id="toggle-search"
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className=" header__feature__input"
          placeholder="Nhập từ khoá .."
          aria-label="Search"
          aria-describedby="addon-wrapping"
        ></input>

        <Link
          onClick={searchBtn}
          to={`/bai-viet/${search}`}
          className="header__feature__searchIcon--input"
        >
          <i className="fas fa-search header__feature__searchIconInput"></i>
        </Link>

        <div className="header__feature">
          <label htmlFor="toggle-search" className="header__feature__search">
            <i className="fas fa-search header__feature__searchIcon"></i>
          </label>

          <span className="header__feature__cart">
            <Link to={cart.length ? "/gio-hang" : "/message-empty"}>
              <i
                onClick={showTotal}
                className="fas fa-cart-plus header__feature__cartIcon"
              ></i>
            </Link>
            <span className="header__feature__cart--quantity">
              {showQuantity()}
            </span>
          </span>
        </div>

        <div className="header__auth">
          <span className="header__signOut">Xin Chào {auth}</span>

          <a
            onClick={auth ? signOut : null}
            href="/auth"
            className="header__signIn"
          >
            {auth ? "Đăng Xuất" : "Đăng Nhập"}
          </a>
        </div>
      </div>

      <div className="nav ">
        <input className="nav__checkbox" type="checkbox" id="toggle-id" />
        <label htmlFor="toggle-id" className="nav__button">
          <span className="nav__icon">&nbsp;</span>
        </label>

        <div className="nav__menu">
          <ul className="nav__list">
            <label
              onClick={clickLink1}
              htmlFor="toggle-id"
              className="nav__item nav__item--1"
            >
              trang chủ
            </label>

            <label
              onClick={clickLink2}
              htmlFor="toggle-id"
              className="nav__item nav__item--2"
            >
              sản phẩm
            </label>

            <label
              onClick={clickLink3}
              htmlFor="toggle-id"
              className="nav__item nav__item--3"
            >
              bài viết
            </label>

            <label
              onClick={clickLink4}
              htmlFor="toggle-id"
              className="nav__item nav__item--5"
            >
              chứng nhận
            </label>

            <label
              onClick={clickLink5}
              htmlFor="toggle-id"
              className="nav__item nav__item--6"
            >
              liên hệ
            </label>

            <label htmlFor="toggle-id" className="nav__item nav__item--7">
              <a
                onClick={auth ? signOut : null}
                href="/auth"
                className="nav__signIn"
              >
                {auth ? "Đăng Xuất" : "Đăng Nhập"}
              </a>
            </label>
          </ul>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
