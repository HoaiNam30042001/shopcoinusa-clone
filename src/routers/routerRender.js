import BuyHistory from "../Component/BuyHistory/BuyHistory";
import HomePage from "../Component/HomePage/HomePage";
import SellHistory from "../Component/SellHistory/SellHistory";
import routers from "./routers";

export const userRouter = [
  { path: routers.homeUser, component: HomePage },
  { path: routers.buyHistoryUser, component: BuyHistory },
  { path: routers.sellHistoryUser, component: SellHistory },
];
