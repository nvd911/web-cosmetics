import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import PropTypes from "prop-types";
import "./search.scss";
import { onSearchBtn } from "../../searchSlice";
import Share from "../Share";
import postsApi from "../../../../api/postsApi";
import { onGetPosts } from "../../postSlice";

function Search(props) {
  const dispatch = useDispatch();
  const { search } = useParams();
  const [searchInput, setSearchInput] = useState("");
  const posts = useSelector((state) => state.posts);
  const searchFilter = useSelector((state) => state.searchFilter);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await postsApi.getPosts();
        dispatch(onGetPosts(response));
        dispatch(onSearchBtn(response));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

  const showPost = (searchFilter) => {
    let result = null;
    result = searchFilter.map((item, index) => {
      return <Share key={index} post={item}></Share>;
    });
    return result;
  };

  const postFilter = () => {
    return posts.filter((post) => {
      return (
        xoa_dau(post.name)
          .toLowerCase()
          .indexOf(xoa_dau(searchInput).toLowerCase()) !== -1
      );
    });
  };

  const searchBtn = () => {
    dispatch(onSearchBtn(postFilter()));
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
    <div className="search ">
      <div className="search__title">
        <h3 className="search__text--1">Search results for: {search}</h3>
        <span className="search__text--2">
          <Link to="/">Home</Link> / Search results for "{search}"
        </span>
      </div>

      <div>
        <h3 className="search__result">Search results:</h3>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          className="form-control  search__input "
          placeholder="Nhập từ khoá tìm kiếm"
          aria-label="Search"
          aria-describedby="addon-wrapping"
        ></input>
        <Link
          onClick={searchBtn}
          to={`/bai-viet/${searchInput}`}
          className="search__searchIcon--input"
        >
          <i className="fas fa-search search__searchIcon"></i>
        </Link>
        <p className="search__mess">
          If you are not happy with the results below please do another search
        </p>
      </div>

      {showPost(searchFilter)}
    </div>
  );
}

Search.propTypes = {};

export default Search;
