import { useState, useEffect } from "react";
import style from "../styles/style.css";

export function Converter({ coinValue, coinValue2 }) {
  const [firstValue, setFirstValue] = useState(0);
  const [price, setPrice] = useState(0);

  const changeFirstValue = function (e) {
    setFirstValue(e.target.value);
  };

  const convert = async function () {
    const url = `https://economia.awesomeapi.com.br/json/last/${coinValue2}-${coinValue}`;

    const response = await fetch(url);
    const result = await response.json();


    setPrice(result[`${coinValue2}${coinValue}`]["bid"]);
    let finalValue = firstValue * price;

    if (price) {
      document.getElementById("answer").innerHTML = finalValue.toFixed(3);
    }
  };

  useEffect(() => {
    convert();
  }, []);

  return (
    <div className="body">
      <div className="card">
        <h1 className="title">Coin Converter</h1>
        <label>{coinValue2}</label>
        <input
          type="text"
          onChange={changeFirstValue}
          value={firstValue}
          className="input-value"
          placeholder="Value"
        ></input>
        <label>{coinValue}</label>
        <label id="answer"></label>
        <button type="button" onClick={convert}>
          Converter
        </button>
      </div>
    </div>
  );
}
