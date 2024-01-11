import { DATA_COIN, SEARCH_DATA_COIN } from "../constant/constant";

const initialState = {
  dataCoin: [
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
    { id: 1, name: "kan", price: 2000000, high: 252, low: 100 },
  ],
};

let dataCoinReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_COIN:
      state.dataCoin = payload;
      return { ...state };
    case SEARCH_DATA_COIN:
      state.dataCoin = [];
      return { ...state };
    default:
      return state;
  }
};
export default dataCoinReducer;
