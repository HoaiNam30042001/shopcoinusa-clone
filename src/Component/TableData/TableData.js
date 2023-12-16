import DataCoinsUser from "../../utils/Data/CoinsUser";
import className from "classnames/bind";
import styles from "./TableData.module.css";

const cx = className.bind(styles);
function TableData(RenderBodyTable) {
  const { name, index, h1, h2, h3, h4, h5, h6, h7 } = DataCoinsUser().headers;
  function Thead({ item }) {
    return <>{item && <th className={`${cx("hovered")}`}>{item.title}</th>}</>;
  }
  return (
    <>
      <table className={`${cx("table")}`}>
        <thead className={`${cx("thead")}`}>
          <tr>
            <Thead item={index} />
            <Thead item={h1} />
            <Thead item={h2} />
            <Thead item={h3} />
            <Thead item={h4} />
            <Thead item={h5} />
            <Thead item={h6} />
            <Thead item={h7} />
            <th></th>
          </tr>
        </thead>
      </table>
    </>
  );
}
export default TableData;
