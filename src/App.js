import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.js";
import HomePage from "./Component/HomePage/HomePage.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
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
