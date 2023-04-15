import React from "react";

export function DropDownSecondCoin({secondCoin}) {


  return (
    <select id="content-list2" onChange={(e) => secondCoin(e.target.value)}>
      <option value={"USD"}>USD</option>
      <option value={"EUR"}>EUR</option>
      <option value={"BTC"}>BTC</option>
    </select>
  );
}
