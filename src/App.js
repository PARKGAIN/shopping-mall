import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadcrumbExample from "./Breadcrumb";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import Event from "./pages/Event";
import { useState } from "react";
import data from "./data";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "./Card";
function App() {
  let [shoes, setShoes] = useState(data);
  let [click, setClick] = useState();

  return (
    <>
      <BreadcrumbExample />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" />
              <div className="padding-100">
                <Container>
                  <Row>
                    {shoes.map((element, index) => {
                      return <Card shoe={shoes[index]} i={index + 1} />;
                    })}
                    <Col sm>
                      <img src={shoes} width="80%" />
                      <h4>Converse</h4>
                      <p>100000</p>
                    </Col>
                  </Row>
                </Container>
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
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              console.log(result.data);
              let shoescopy = [...shoes];
              let fetchedshoes = shoescopy.concat(result.data);
              setShoes(fetchedshoes);
            })
            .catch(() => {
              console.log("error");
            });
        }}
      >
        버튼
      </button>
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
