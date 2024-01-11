import React from "react";
import { NavLink } from "react-router-dom";
import className from "classnames/bind";
import routers from "../../routers/routers";
import styles from "./Sidebar.module.css";
import {
  BlockUserIcon,
  BuyIcon,
  ChangeCoinIcon,
  ContactIcon,
  DashboardIcon,
  DepositsIcon,
  HistoryIcon,
  HomePageIcon,
  LiveChatIcon,
  MyCoinIcon,
  PaymentIcon,
  ProfileIcon,
  RateIcon,
  SellIcon,
  SettingIcon,
  UserIcon,
  WithdrawIcon,
} from "../Icons";
import { localUserServ } from "../../services/localServices";

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
const LIST_SIDEBAR = [
  {
    name: "Dashboard",
    path: routers.dashboard,
    icon: <DashboardIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Payment",
    path: routers.payment,
    icon: <PaymentIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Rate",
    path: routers.rate,
    icon: <RateIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Settings Coin",
    path: routers.settingCoin,
    icon: <SettingIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Coin Inactive",
    path: routers.coinInactive,
    icon: <BlockUserIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Deposits",
    path: routers.deposits,
    icon: <DepositsIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Withdraws",
    path: routers.withdraw,
    icon: <WithdrawIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Buy",
    path: routers.buy,
    icon: <BuyIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Sell",
    path: routers.sell,
    icon: <SellIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "Change Coin",
    path: routers.changeCoin,
    icon: <ChangeCoinIcon className={`${cx("custom-icon")}`} />,
  },
  {
    name: "User",
    path: routers.user,
    icon: <UserIcon className={`${cx("custom-icon")}`} />,
  },
];
function Sidebar() {
  let currentUser = localUserServ.get();
  const classed = cx("sidebar-container");
  return (
    <div className={classed}>
      {(currentUser?.rule === "user" ? LIST_SIDEBAR_USER : LIST_SIDEBAR).map(
        (item, index) => (
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
        )
      )}
    </div>
  );
}

export default Sidebar;
