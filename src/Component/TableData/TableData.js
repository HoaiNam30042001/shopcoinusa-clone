import DataCoinsUser from "../../utils/Data/CoinsUser";
import className from "classnames/bind";
import styles from "./TableData.module.css";
import Image from "../Image/Image";
import { useMemo, useState } from "react";
import Pagination from "../Pagination/Pagination";

const cx = className.bind(styles);
let PageSize = 10;

export function TrObjectImage({ item }) {
  return (
    <>
      <Image src={item} alt={item} className={`${cx("image")}`} />
    </>
  );
}
function TableData({
  children,
  headers,
  noActions,
  data,
  onPageChange,
  currentPage,
}) {
  const { name, index, h1, h2, h3, h4, h5, h6, h7 } = headers;
  function Thead({ item }) {
    return <>{item && <th className={`${cx("hovered")}`}>{item.title}</th>}</>;
  }
  return (
    <>
      <table className={`${cx("table")}`}>
        <thead className={`${cx("thead")}`}>
          <tr>
            <Thead item={index} />
            <Thead item={h1} />
            <Thead item={h2} />
            <Thead item={h3} />
            <Thead item={h4} />
            <Thead item={h5} />
            <Thead item={h6} />
            <Thead item={h7} />
            {!noActions && <th></th>}
          </tr>
        </thead>
        <tbody className="tbody">{children}</tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={onPageChange}
      />
    </>
  );
}
export default TableData;
