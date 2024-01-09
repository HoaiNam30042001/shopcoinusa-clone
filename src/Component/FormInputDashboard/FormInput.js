import React, { forwardRef, useState } from "react";
import className from "classnames/bind";
import styles from "./FormInput.module.css";
import { EyeIcon, EyeShowIcon } from "../Icons";

const cx = className.bind(styles);

const FormInput = forwardRef(
  (
    {
      label,
      type,
      placeholder,
      classNameInput,
      classNameField,
      value,
      showPwd,
      onChange,
      name,
      readOnly,
      onEnter,
    },
    ref
  ) => {
    const [typePwd, setTypePwd] = useState(false);
    const classedInput = cx(
      "input",
      classNameInput,
      showPwd ? "show-pwd" : "",
      readOnly ? "read-only" : ""
    );
    const classedField = cx("field-container", classNameField);
    const handleTypePwd = () => {
      setTypePwd(!typePwd);
    };
    return (
      <div className={classedField}>
        {label && <label className="label">{label}</label>}
        <div className={cx("relative-input")}>
          <input
            ref={ref}
            type={showPwd ? (typePwd ? "text" : "password") : type}
            className={classedInput}
            placeholder={!readOnly ? placeholder : "Read only"}
            value={value}
            onChange={onChange}
            name={name}
            readOnly={readOnly}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onEnter(e);
              }
            }}
          />
          {showPwd && (
            <span className={cx("icon-eye")} onClick={handleTypePwd}>
              {typePwd ? (
                <EyeIcon className={cx("icon")} />
              ) : (
                <EyeShowIcon className={cx("icon")} />
              )}
            </span>
          )}
        </div>
      </div>
    );
  }
);

export default FormInput;
