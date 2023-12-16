import React from "react";
import { NavLink } from "react-router-dom";
import className from "classnames/bind";
import routers from "../../routers/routers";
import styles from "./Sidebar.module.css";
import {
  ContactIcon,
  DepositsIcon,
  HistoryIcon,
  HomePageIcon,
  LiveChatIcon,
  MyCoinIcon,
  ProfileIcon,
  WithdrawIcon,
} from "../Icons";

const cx = className.bind(styles);

const LIST_SIDEBAR_USER = [
  {
    name: "Home Page",
    path: routers.homeUser,
    icon: <HomePageIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "My Coin",
    path: routers.myCoinUser,
    icon: <MyCoinIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Buy History",
    path: routers.buyHistoryUser,
    icon: <HistoryIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Sell History",
    path: routers.sellHistoryUser,
    icon: <HistoryIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Deposits",
    path: routers.depositUser,
    icon: <DepositsIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Withdraws",
    path: routers.withdrawUser,
    icon: <WithdrawIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Profile",
    path: routers.profileUser,
    icon: <ProfileIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Contact",
    path: routers.contactUser,
    icon: <ContactIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Live Chat",
    path: routers.liveChatUser,
    icon: <LiveChatIcon className={`${cx("custom-icon")}`} />,
  },
];

function Sidebar() {
  const classed = cx("sidebar-container");
  return (
    <div className={classed}>
      {LIST_SIDEBAR_USER.map((item, index) => (
        <NavLink
          to={item.path}
          className={(nav) =>
            cx("menu-item", {
              active: nav.isActive,
            })
          }
          key={index}
        >
          {item.icon}
          <span className={cx("title")}>{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
