import moment from "moment";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import className from "classnames/bind";
import General from "../General/General";
import DataCoinsUser from "../../utils/Data/CoinsUser";
const cx = className.bind(styles);
function RenderBodyTable({ data }) {
  if (data.length != 0) {
    return data.map((item, index) => {
      return (
        <tr key={item?._id}>
          <td></td>
          <td></td>
          <td className="item-w150">
            {item?.name} <span className="confirm">({item?.price})</span>
          </td>
          <td className="complete item-w150">{item?.high}</td>
          <td className="cancel item-w150">{item?.low}</td>
          <td className="item-w100">
            {moment(item?.createdAt).format("DD/MM/YYYY HH:mm:ss")}
          </td>
          <td>
            <Link
              to={`${item?._id}`}
              className={`${cx("actions-item")} completebgcbold fwb`}
            >
              Buy
            </Link>
          </td>
        </tr>
      );
    });
  } else {
    const lengthHeader = Object.keys(DataCoinsUser().headers).length;

    return (
      <tr>
        <td colSpan={lengthHeader} style={{ textAlign: "center" }}>
          No Data
        </td>
      </tr>
    );
  }
}
export default function HomePage() {
  let data = [];
  useEffect(() => {
    document.title = `Home | Shop Coin USA`;
  }, []);
  return (
    <General dataHeaders={DataCoinsUser().headers}>
      <RenderBodyTable data={data} />
    </General>
  );
}
