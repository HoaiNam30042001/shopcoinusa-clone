import React from "react";
import className from "classnames/bind";
import styles from "./SelectValue.module.css";
import { SelectOptionArrowIcon } from "../Icons";

const cx = className.bind(styles);

export default function SelectValue({
  label,
  toggleModal,
  stateModal,
  valueSelect,
  dataFlag,
  onClick,
}) {
  return (
    <div className="detail-item flex-column p0">
      <label className="label mr-auto">{label}</label>
      <div className={`${cx("detail-list")}`}>
        <div className={`${cx("list-container")}`}>
          <div onClick={toggleModal} className="w100 flex-space-between">
            <div className={`${cx("value")}`}>{valueSelect || "---"}</div>
            <SelectOptionArrowIcon />
          </div>
          {stateModal && (
            <div className={`${cx("list")}`}>
              {dataFlag.map((item, index) => (
                <div
                  className={`${cx("item")}`}
                  key={index}
                  onClick={() => onClick(item.name || item)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
