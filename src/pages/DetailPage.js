import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import styled from "styled-components";
import NumberInput from "../components/NumberInput";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;
let newBtn = styled.button(YellowBtn);

function DetailPage(props) {
  let { id } = useParams();
  let [num, setNum] = useState("");
  let 찾은상품 = props.shoes.find(function (x) {
    return x.id == id;
  });
  let [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let a = setTimeout(() => {
      setVisible(false);
    }, 2000);

    return () => {
      clearTimeout(a);
    };
  }, [count]);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);

  return (
    <div className="container">
      {visible && <Discount />}
      {count}
      <YellowBtn
        bg="blue"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

function Discount() {
  return (
    <>
      <div className="alert alert-warning">2초 이내 구매시 할인</div>
    </>
  );
}
export default DetailPage;
