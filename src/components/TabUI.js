import React, { useEffect } from "react";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";

function TabUI({ shoes }) {
  let [tabClick, setTabClick] = useState(0);

  return (
    <>
      <Nav>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabClick(0);
            }}
          >
            탭1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabClick(1);
            }}
          >
            탭2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTabClick(2);
            }}
          >
            탭3
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tabClick={tabClick} shoes={shoes} />
    </>
  );
}
function TabContent({ tabClick, shoes }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      // useEffect 안에 있는 함수 전에 실행됨
      //리액트의 automatic batching 기능때문에 합쳐짐
      clearTimeout(a);
      setFade("");
    };
  }, [tabClick]);
  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>{shoes[0].title}</div>,
          <div>Tab 2 내용입니다.</div>,
          <div>Tab 3 내용입니다.</div>,
        ][tabClick]
      }
    </div>
  );
}
export default TabUI;
