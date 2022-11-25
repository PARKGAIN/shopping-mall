import React, { useEffect } from "react";

function NumberInput() {
  function a() {
    const value = document.getElementById("input-number").value;
    isNaN(value) ? alert("다시 입력하세요") : console.log("올바른 입력");
  }
  return (
    <div>
      <input id="input-number" placeholder="숫자만 입력" onChange={a} />
    </div>
  );
}

export default NumberInput;
