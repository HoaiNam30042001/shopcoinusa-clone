import { SEARCH_DATA_COIN } from "../constant/constant";

export const searchAction = (e, dispatch) => {
  const searchValueInput = e.target.value;
  console.log(e.target.value);
  if (searchValueInput.charAt(0) === " ") {
    console.log("No Search");
    return;
  } else {
    dispatch({
      type: SEARCH_DATA_COIN,
      payload: searchValueInput,
    });
  }
};
export const searchInput = (valueSearch, filed) => {
  return (
    filed &&
    filed
      ?.toString()
      ?.toLowerCase()
      ?.indexOf(valueSearch?.toString()?.toLowerCase()) !== -1
  );
};
