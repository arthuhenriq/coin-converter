import React from "react";
import style from "../styles/style.css";

export function DropDownSecondCoin({secondCoin}) {


  return (
    <div className="box">
    <select onChange={(e) => secondCoin(e.target.value)}>
      <option value={"USD"}>USD</option>
      <option value={"EUR"}>EUR</option>
      <option value={"BTC"}>BTC</option>
    </select>
    </div>
  );
}
