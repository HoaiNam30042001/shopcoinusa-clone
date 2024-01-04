import React from "react";
import className from "classnames/bind";
import styles from "./General.module.css";
import Search from "../Search/Search";
import { RefreshIcon } from "../Icons";
import TableData from "../TableData/TableData";
import Button from "../Button/Button";
import { BlockUserIcon } from "../Icons";
const cx = className.bind(styles);
let refreshPage = () => {
  window.location.reload();
};
function General({ children, dataHeaders, noActions,addPaymentBtn }) {
  return (
    <>
      <div>
        <div className={`${cx("general-top")}`}>
          <Search />
          <div className="flex-center">
            {
              true && (
                addPaymentBtn
              )
            }
            <button
              className={`${cx("Button_button__wiIYs")} confirmbgc`}
              onClick={refreshPage}
            >
              <RefreshIcon className="fz12" />
              <span className={`${cx("general-button-text")}`}>
                Refresh Page
              </span>
            </button>
          </div>
        </div>
        <div className={`${cx("general-table-container")}`}>
          <TableData noActions={noActions} headers={dataHeaders}>
            {children}
          </TableData>
        </div>
      </div>
    </>
  );
}

export default General;
