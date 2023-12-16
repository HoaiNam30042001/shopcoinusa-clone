import React from "react";
import Header from "../Component/Header/Header.js";
import styles from "./Layout.module.css";
import className from "classnames/bind";
import Sidebar from "../Component/Sidebar/Sidebar.js";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../Component/Breadcrumb/Breadcrumb.js";
const cx = className.bind(styles);

export default function Layout({ Component }) {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/").filter(Boolean);
  return (
    <div>
      <div className={`${cx("mainpage")}`}>
        <Header />
        <div className={`${cx("content-container")}`}>
          <Sidebar className={`${cx("custom-sidebar")}`} />
          <div className={`${cx("content")}`}>
            <Breadcrumb />
            <div className={`${cx("page-title")}`}>Home</div>
            <div className={`${cx("main-content")}`}>
              <Component />
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
