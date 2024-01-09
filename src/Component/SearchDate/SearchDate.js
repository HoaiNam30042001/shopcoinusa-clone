import React from "react";
import className from "classnames/bind";
import styles from "./SearchDate.module.css";
import { SearchDateIcon } from "../Icons";

const cx = className.bind(styles);

function SearchDate({
  className,
  placeholder = "Search by date...",
  onChange,
  name,
  value,
}) {
  const classed = cx("search-container", className);
  return (
    <div className={classed}>
      <div className={`${cx("search-icon")}`}>
        <SearchDateIcon className={`${cx("icon")}`} />
      </div>
      <div className={`${cx("search-input")}`}>
        <input
          type="date"
          placeholder={placeholder}
          className={`${cx("input")}`}
          onChange={onChange}
          name={name}
          value={value}
          required
        />
      </div>
    </div>
  );
}

export default SearchDate;
