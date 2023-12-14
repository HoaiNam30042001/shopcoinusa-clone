import React from "react";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import routers from "../../routers/routers";
import styles from "./Header.module.css";
import Image from "../Image/Image";
import { BellIcon } from "../Icons/index";
import { useSelector } from "react-redux";

const cx = className.bind(styles);

function Header() {
  return (
    <div className={`${cx("header-container")}`}>
      <Link to={routers.home}>
        <Image
          src="/images/header-logo.png"
          alt="header_logo"
          className={`${cx("header-logo")}`}
        />
      </Link>
      <div className={`${cx("header-infouser-container")}`}>
        <div>
          <BellIcon className={`${cx("iconsBell")}`} />
        </div>
        <img src="./svgs/logo.svg" alt="" className={cx("ml10")} />
      </div>
    </div>
  );
}

export default Header;
