import React from "react";
import className from "classnames/bind";
import styles from "./Modal.module.css";
import Button from "../ButtonDashboard/Button";
import { CloseIcon } from "../Icons";

const cx = className.bind(styles);

function Modal({
  children,
  titleHeader,
  actionButtonText,
  closeModal,
  openModal,
  classNameButton,
  errorMessage,
  onClick,
  isProcess,
  hideButton,
  disabled,
}) {
  const classed = cx("modal-button-me", classNameButton);

  return (
    <div className={`${cx("modal-container-me")}`} onClick={closeModal}>
      <div className={`${cx("modal-content-me")}`} onClick={openModal}>
        <div className={`${cx("modal-header-me")}`}>
          <div className={`${cx("modal-text-header-me")}`}>{titleHeader}</div>
          <span
            className={`${cx("modal-icon-header-me")}`}
            onClick={closeModal}
          >
            <CloseIcon />
          </span>
        </div>
        <div className={`${cx("modal-body-me")}`}>{children}</div>
        {!hideButton && (
          <div className={`${cx("modal-footer-me")}`}>
            <Button
              // className={`${cx('modal-button-me')} btn-cancel`}
              className="completebgc"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              className={classed}
              onClick={onClick}
              isProcess={isProcess}
              disabled={isProcess || disabled}
            >
              {actionButtonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
