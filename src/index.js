import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import "./styles/General.css";
import "./styles/TableData.css";
import "./styles/StatusRank.css";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducer/rootReducer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(compose(applyMiddleware(thunk)))
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
