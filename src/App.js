import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadcrumbExample from "./Breadcrumb";
import ResponsiveAutoExample from "./ResponsiveAutoExample";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import Event from "./pages/Event";
import { useState } from "react";
import data from "./data";
import axios from "axios";
function App() {
  let [shoes] = useState(data);
  return (
    <>
      <BreadcrumbExample />
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              console.log(result.data);
            })
            .catch(() => {
              console.log("error");
            });
        }}
      >
        버튼
      </button>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" />
              <div className="padding-100">
                <ResponsiveAutoExample />
              </div>
            </>
          }
        ></Route>
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<About />} />
        </Route>
        <Route
          path="*"
          element={<div style={{ textAlign: "center" }}>404</div>}
        />
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </>
  );
}

function About() {
  return (
    <>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </>
  );
}
export default App;
