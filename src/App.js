import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.js";
import routers from "./routers/routers.js";
import HomePage from "./Component/HomePage/HomePage.js";
import Login from "./Layout/Login/Login.js";
import Register from "./Layout/Register/Register.js";
import BuyCoin from "./Component/BuyCoin/BuyCoin.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route path={routers.login} element={<Login />}/>
          <Route path={routers.register} element={<Register/>}/>
          <Route path={routers.testCoinId} element={<Layout Component={BuyCoin} />}/>
        </Routes>
        <div
          className="scroll-to-top-container"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
