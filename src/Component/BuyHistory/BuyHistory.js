import React from "react";
import moment from "moment";
import styles from "./BuyHistory.module.css";
import General from "../General/General";
import classNames from "classnames/bind";
import DataBuyHistoryUser from "../../utils/Data/BuyHistoryUser";
const cx = classNames.bind(styles);

export default function BuyHistory() {
  function RenderBodyTable({ data }) {
    if (data.length != 0) {
      return (
        <>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td></td>
                <td className="item-w150">
                  {item?.symbol.replace("USDT", "")}
                </td>
                <td className="vip item-w150">{item?.amount}</td>
                <td className="confirm item-w100">
                  {item?.price?.toFixed(5) || "---"}
                </td>
                <td className="complete item-w150"></td>
                <td className="item-w100">
                  {moment(item?.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                </td>
                <td className="flex-center">
                  <span
                    className={`status ${item?.status?.toLowerCase() + "bgc"}`}
                  ></span>
                </td>
              </tr>
            );
          })}
        </>
      );
    } else {
      const lengthHeader = Object.keys(DataBuyHistoryUser().headers).length;
      return (
        <tr>
          <td colSpan={lengthHeader} style={{ textAlign: "center" }}>
            No Data
          </td>
        </tr>
      );
    }
  }
  let data = [];
  return (
    <>
      <General
        className={cx("setting-coin")}
        dataHeaders={DataBuyHistoryUser().headers}
        noActions
      >
        <RenderBodyTable data={data} />
      </General>
    </>
  );
}
