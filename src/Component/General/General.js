import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./General.module.css";
import Search from "../Search/Search";
import { RefreshIcon } from "../Icons";
import TableData from "../TableData/TableData";
import { searchAction } from "../../redux/Actions/searchAction";
import { DATA_COIN, SEARCH_DATA_COIN } from "../../redux/constant/constant";
import { useDispatch, useSelector } from "react-redux";
const cx = className.bind(styles);
let refreshPage = () => {
  window.location.reload();
};
function General({
  children,
  dataHeaders,
  noActions,
  addPaymentBtn,
  data,
  onPageChange,
  currentPage,
}) {
  const [searchInput, setSearchInput] = useState("");
  let DataTable = useSelector((state) => {
    return state.dataCoinReducer.dataCoin;
  });
  let dispatch = useDispatch();
  const handleChangeSearch = (searchValue) => {
    console.log(searchValue);
    if (searchValue.charAt(0) === " ") {
      dispatch({ type: DATA_COIN, payload: DataTable });
    } else {
      setSearchInput(searchValue);
      dispatch({ type: SEARCH_DATA_COIN, payload: searchValue });
    }
  };
  return (
    <>
      <div>
        <div className={`${cx("general-top")}`}>
          <Search onChange={handleChangeSearch} value={searchInput} />
          <div className="flex-center">
            {true && addPaymentBtn}
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
          <TableData
            onPageChange={onPageChange}
            noActions={noActions}
            headers={dataHeaders}
            data={data}
            currentPage={currentPage}
          >
            {children}
          </TableData>
        </div>
      </div>
    </>
  );
}

export default General;
