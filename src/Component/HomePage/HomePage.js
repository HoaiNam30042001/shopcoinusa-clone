import moment from "moment";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import className from "classnames/bind";
import General from "../General/General";
import DataCoinsUser from "../../utils/Data/CoinsUser";
import { TrObjectImage } from "../TableData/TableData";
import { indexTable } from "../../utils/HandleGeneral";
import { useSelector } from "react-redux";
const cx = className.bind(styles);
let PageSize = 10;

function RenderBodyTable({ data, currentPage, PageSize }) {
  if (data.length != 0) {
    return data.map((item, index) => {
      return (
        <tr key={item?._id}>
          <td>{indexTable(currentPage, PageSize, index)}</td>
          <td>
            <TrObjectImage
              // item={`${URL_SERVER}${item.logo?.replace("uploads/", "")}`}
              item="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvhPmD815Qou3OA2pQ7yYWnLSl2MVdSSEf00oq6qkffQ&s"
            />
          </td>
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
  let DataTable = useSelector((state) => {
    return state.dataCoinReducer.dataCoin;
  });
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return DataTable.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, DataTable]);
  useEffect(() => {
    document.title = `Home | Shop Coin USA`;
  }, []);
  return (
    <General
      dataHeaders={DataCoinsUser().headers}
      data={DataTable}
      onPageChange={(page) => setCurrentPage(page)}
      currentPage={currentPage}
    >
      <RenderBodyTable
        data={currentTableData}
        currentPage={currentPage}
        PageSize={PageSize}
      />
    </General>
  );
}
