import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import className from "classnames/bind";
import routers from "../../routers/routers";
import styles from "./Breadcrumb.module.css";
import { ArrowRightIcon, BreadcrumbHomeIcon } from "../Icons";

const cx = className.bind(styles);

function Breadcrumb({ titleList, linkList }) {
  return (
    <div className={`${cx("breadcrumb-container")}`}>
      <div role="presentation" className={`${cx("presentation")}`}>
        <Link
          to={"/"}
          className={`${cx("breadcrumb-link")} cl-primary hv-primary`}
        >
          <BreadcrumbHomeIcon className="mr8" />
          Home
        </Link>
        {titleList &&
          titleList.map((item, index) => {
            const pathBefore = linkList.slice(0, index + 1);
            return (
              <Link
                key={index}
                to={`/${pathBefore.join("/")}`}
                className={`${cx("breadcrumb-link")}`}
              >
                <ArrowRightIcon className={`${cx("arrow")}`} />
                {item}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Breadcrumb;
