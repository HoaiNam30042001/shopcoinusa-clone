import { DATE, SELECT_DATE } from "../constant/constant";

const initialState = {
  dateFrom: "",
  dateTo: "",
};

let dateReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATE:
      let { dateFrom, dateTo } = payload;
      console.log(dateFrom, dateTo);
      return { ...state, dateFrom, dateTo };
    case SELECT_DATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
export default dateReducer;
