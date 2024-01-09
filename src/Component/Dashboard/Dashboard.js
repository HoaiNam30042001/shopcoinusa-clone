/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import className from "classnames/bind";
import moment from "moment";
import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";
import routers from "../../routers/routers";
import Button from "../ButtonDashboard/Button";
import { SearchDateIcon } from "../Icons";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { dateVnFormat2 } from "../../utils/format/DateVN";
import { DATE, SELECT_DATE } from "../../redux/constant/constant";
import SelectValue from "../SelectValue/SelectValue";
import SearchDate from "../SearchDate/SearchDate";
import periodDate from "../../utils/Data/PeriodDate";
import { formatUSD } from "../../utils/format/FormatMoney";

const cx = className.bind(styles);

function Dashboard() {
  let dispatch = useDispatch();
  let { dateFrom, dateTo } = useSelector((state) => {
    return state.dateReducer;
  });
  const [isProcess, setIsProcess] = React.useState(false);
  const [isLoad, setIsLoad] = React.useState(false);
  const [isModalDate, setIsModalDate] = React.useState(false);
  const [isPeriod, setIsPeriod] = React.useState(false);
  const [period, setPeriod] = React.useState(null);
  const [dataSymbol, setDataSymbol] = React.useState(null);
  const [date, setDate] = React.useState({
    from: null,
    to: null,
  });

  useEffect(() => {
    document.title = `Dashboard | ${process.env.REACT_APP_TITLE_WEB}`;
  }, []);
  const handleChangePeriod = (item) => {
    const date = new Date();
    let toDate = new Date();
    let fromDate = new Date();
    switch (item?.toLowerCase()?.replace(/\s/g, "")) {
      case "today":
        fromDate = new Date();
        break;
      case "yesterday":
        fromDate = new Date(date.setDate(date.getDate() - 1));
        break;
      case "thisweek":
        //lấy ngày thứ 2 của tuần week[1]
        fromDate = new Date(date.setDate(date.getDate() - date.getDay() + 1));
        break;
      case "lastweek":
        fromDate = new Date(
          date.setDate(date.getDate() - date.getDay() + 1 - 7)
        );
        toDate = new Date(date.setDate(date.getDate() - date.getDay() + 7));
        break;
      case "thismonth":
        // lấy ngày đầu tiên của tháng
        fromDate = new Date(date.setDate(1));
        break;
      case "lastmonth":
        fromDate = new Date(date.setMonth(date.getMonth() - 1, 1));
        toDate = new Date(date.setMonth(date.getMonth() + 1, 0));
        break;
      case "thisyear":
        // lấy ngày đầu tiên của năm
        fromDate = new Date(date.setMonth(0, 1));
        break;
      case "lastyear":
        fromDate = new Date(date.setFullYear(date.getFullYear() - 1, 0, 1));
        toDate = new Date(date.setFullYear(date.getFullYear() + 1, 0, 0));
        break;
      default:
        fromDate = new Date();
        break;
    }
    dispatch({
      type: DATE,
      payload: {
        dateFrom: dateVnFormat2(fromDate),
        dateTo: dateVnFormat2(toDate),
      },
    });
    setPeriod(item);
    setIsPeriod(false);
  };
  const openModalDate = (e) => {
    e.stopPropagation();
    setIsModalDate(true);
  };
  const closeModalDate = (e) => {
    e.stopPropagation();
    setIsModalDate(false);
  };
  const onSelectDate = (e) => {
    e.stopPropagation();
    setIsModalDate(false);
    setDate({
      from: dateFrom || dateVnFormat2(new Date()),
      to: dateTo || dateVnFormat2(new Date()),
    });
  };
  const tooglePeriod = (e) => {
    e.stopPropagation();
    setIsPeriod(!isPeriod);
  };
  const handleChangeDate = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: SELECT_DATE,
      payload: { [name]: value },
    });
  };
  const ChartItem = ({ title, value, link, to }) => {
    return (
      <div className={`${cx("item")}`}>
        {link ? (
          <Link to={to} className={`${cx("title-link")}`}>
            {title}
          </Link>
        ) : (
          <div className={`${cx("title")}`}>{title}</div>
        )}
        <div className={`${cx("value")}`}>
          {isLoad ? "Loading..." : formatUSD(value || 0)}
        </div>
      </div>
    );
  };
  // function RenderBodyTable({ data }) {
  //   return (
  //     <>
  //       {data.map((item, index) => {
  //         return (
  //           <tr key={item?._id} className="fz14">
  //             <td className="upc">
  //               {handleUtils.indexTable(page, show, index)}
  //             </td>
  //             <td>{item.symbol}</td>
  //             <td className="text-left">{item.total}</td>
  //           </tr>
  //         );
  //       })}
  //     </>
  //   );
  // }
  // function RenderBodyTableUser({ data }) {
  //   return (
  //     <>
  //       {data.map((item, index) => {
  //         return (
  //           <tr key={item?._id} style={{ fontSize: "14px" }}>
  //             <td className="upc">
  //               {handleUtils.indexTable(page, show, index)}
  //             </td>
  //             <td className="item-w150">{item.payment.username}</td>
  //             <td className="item-w150 text-left">{item.payment.email}</td>
  //             <td className="text-left">
  //               {numberUtils.formatUSD(item.Wallet.balance)}
  //             </td>
  //             <td className="text-left">
  //               <span className={`${item.payment.rule + "bgc"} status`}>
  //                 {item.payment.rule}
  //               </span>
  //             </td>
  //             <td className="text-left">
  //               <span className={`${item.rank.toLowerCase() + "bgc"} status`}>
  //                 {FirstUpc(item.rank)}
  //               </span>
  //             </td>
  //           </tr>
  //         );
  //       })}
  //     </>
  //   );
  // }
  return (
    <div className={`${cx("dashboard-container")}`}>
      <div className={`${cx("general-top")}`}>
        <div className="flex-center mt8">
          <Button
            className={`${cx("general-button")} cancelbgc`}
            onClick={openModalDate}
          >
            <SearchDateIcon />
            <span className={`${cx("general-button-text")}`}>
              Select Date Report
            </span>
          </Button>
        </div>
      </div>
      {date.from && date.to && (
        <div className={`${cx("desc-report")}`}>
          Report from{" "}
          <span className="cancel">
            {moment(date.from).format("DD/MM/YYYY")}
          </span>{" "}
          to{" "}
          <span className="cancel">{moment(date.to).format("DD/MM/YYYY")}</span>
        </div>
      )}
      <div className={`${cx("chart-container")}`}>
        <div className={`${cx("chart-item-container")}`}>
          <ChartItem
            title="Total Deposits"
            // value={totalDeposit}
            value={0}
            link
            to={routers.deposits}
          />
          <ChartItem
            title="Total Withdraw"
            // value={totalWithdraw}
            value={0}
            link
            to={routers.withdraw}
          />
          <ChartItem
            title="Balance"
            // value={totalBalance}
            value={0}
          />
          <ChartItem
            title="Commission"
            value={0}
            //  value={totalCommission}
          />
        </div>
      </div>
      {isModalDate && (
        <Modal
          titleHeader="Select date report"
          actionButtonText="Select"
          openModal={openModalDate}
          closeModal={closeModalDate}
          classNameButton="vipbgc"
          onClick={onSelectDate}
        >
          <SelectValue
            label="Period"
            toggleModal={tooglePeriod}
            stateModal={isPeriod}
            dataFlag={periodDate}
            onClick={handleChangePeriod}
            valueSelect={period ? period : "Today"}
          />
          <div className={`${cx("search-container")}`}>
            <div className={`${cx("search-title")}`}>From</div>
            <SearchDate
              name="dateFrom"
              value={dateFrom ? dateFrom : dateVnFormat2(new Date())}
              onChange={handleChangeDate}
              className={`${cx("search")}`}
            />
          </div>
          <div className={`${cx("search-container")}`}>
            <div className={`${cx("search-title")}`}>To</div>
            <SearchDate
              name="dateTo"
              value={dateTo ? dateTo : dateVnFormat2(new Date())}
              onChange={handleChangeDate}
              className={`${cx("search")}`}
            />
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;
