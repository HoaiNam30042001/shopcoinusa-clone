import { localUserServ } from "../../services/localServices";

const initialState = {
  currentUser: localUserServ.get(),
};

let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "USER_LOGIN":
      state.currentUser = payload;
      return { ...state };

    default:
      return state;
  }
};
export default userReducer;
