import React from "react";

export function DropDownSecondCoin({secondCoin}) {

  //   useEffect(() => {
  //     var select = document.querySelector("#content-list2");
  //     if (select) {
  //       select.addEventListener("change", () => {
  //         var value2 = select.options[select.selectedIndex].value;
  //         console.log(value2);
  //       });
  //     }
  //   }, []);

  return (
    <select id="content-list2" onChange={(e) => secondCoin(e.target.value)}>
      <option value={"USD"}>USD</option>
      <option value={"EUR"}>EUR</option>
      <option value={"BTC"}>BTC</option>
    </select>
  );
}
