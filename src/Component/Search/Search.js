import React from "react";
import className from "classnames/bind";
import styles from "./Search.module.css";
import { SearchIcon } from "../Icons";

const cx = className.bind(styles);

function Search() {
  const classed = cx("search-container", className);
  return (
    <div className={classed}>
      <div className={`${cx("search-icon")}`}>
        <SearchIcon className={`${cx("icon")}`} />
      </div>
      <div className={`${cx("search-input")}`}>
        <input type="text" placeholder="Search" className={`${cx("input")}`} />
      </div>
    </div>
  );
}

export default Search;
