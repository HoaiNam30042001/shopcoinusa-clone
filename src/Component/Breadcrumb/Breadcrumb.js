import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import routers from "../../routers/routers";
import styles from "./Breadcrumb.module.css";
import { BreadcrumbHomeIcon } from "../Icons";

const cx = className.bind(styles);

function Breadcrumb() {
  return (
    <div className={`${cx("breadcrumb-container")}`}>
      <div role="presentation">
        <Link
          to={"/"}
          className={`${cx("breadcrumb-link")} cl-primary hv-primary`}
        >
          <BreadcrumbHomeIcon className="mr8" />
          Home
        </Link>
      </div>
    </div>
  );
}

Breadcrumb.propTypes = {
  titleList: PropTypes.node,
  link: PropTypes.array,
};

export default Breadcrumb;
