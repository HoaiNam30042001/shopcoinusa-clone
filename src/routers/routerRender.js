import BuyCoin from "../Component/BuyCoin/BuyCoin";
import BuyHistory from "../Component/BuyHistory/BuyHistory";
import HomePage from "../Component/HomePage/HomePage";
import { Payment } from "../Component/Payment/Payment";
import SellHistory from "../Component/SellHistory/SellHistory";
import Layout from "../Layout/Layout";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import routers from "./routers";

export const userRouter = [
  { path: routers.homeUser,Layout:Layout ,component: HomePage },
  { path: routers.buyHistoryUser,Layout:Layout, component: BuyHistory },
  { path: routers.sellHistoryUser,Layout:Layout, component: SellHistory },
  { path: routers.testCoinId,Layout:Layout , component:BuyCoin},
  { path: routers.login,Layout:Login,component:Login},
  { path: routers.register,Layout:Register,component:Register},
  { path :routers.payment,Layout:Layout,component:Payment}
];
 