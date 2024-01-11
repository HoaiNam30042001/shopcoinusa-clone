import { localUserServ } from "../../services/localServices";
import { USER_LOGIN } from "../constant/constant";

const initialState = {
  currentUser: localUserServ.get(),
};

let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN:
      state.currentUser = payload;
      return { ...state };

    default:
      return state;
  }
};
export default userReducer;
