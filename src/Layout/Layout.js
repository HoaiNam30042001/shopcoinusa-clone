import React from "react";
import Header from "../Component/Header/Header.js";
import styles from "./Layout.module.css";
import className from "classnames/bind";
import Sidebar from "../Component/Sidebar/Sidebar.js";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../Component/Breadcrumb/Breadcrumb.js";
const cx = className.bind(styles);

export default function Layout({ children }) {
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
            <Breadcrumb
              titleList={
                path.length > 0
                  ? path.map((item) => {
                      return item.replace(/-/g, " ");
                    })
                  : ""
              }
              linkList={
                path.length > 0
                  ? path.map((item) => {
                      return item;
                    })
                  : "/"
              }
            />
            <div className={`${cx("page-title")}`}>
              {path.length > 0 ? path[0].replace(/-/g, " ") : "Home"}
            </div>
            <div className={`${cx("main-content")}`}>{children}</div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
