import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.js";
import routers from "./routers/routers.js";
import HomePage from "./Component/HomePage/HomePage.js";
import Login from "./Layout/Login/Login.js";
import Register from "./Layout/Register/Register.js";
import BuyCoin from "./Component/BuyCoin/BuyCoin.js";
import { userRouter } from "./routers/routerRender.js";
function App() {
  const routers = userRouter;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routers.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          <Route path={routers.login} element={<Login />} />
          <Route path={routers.register} element={<Register />} />
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
