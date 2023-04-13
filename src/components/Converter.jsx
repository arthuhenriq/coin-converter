import React from "react";
import { useState, useEffect } from "react";
import { DropDownSecondCoin} from "./DropDownSecondValue";
import style from "../styles/style.css";

export function Converter({firstCoin}) {

  const [firstValue, setFirstValue] = useState(0);
  const [secondCoin, setSecondCoin] = useState('USD')
  const [price, setPrice] = useState(0);

  const changeFirstValue = function (e) {
    setFirstValue(e.target.value);
  };

  const convert = async function () {
    const url = `https://economia.awesomeapi.com.br/json/last/${secondCoin}-${firstCoin}`;

    const response = await fetch(url);
    const result = await response.json();
    
    setPrice(result[`${secondCoin}${firstCoin}`]["bid"]);
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
        <label>BRL</label>
        <input
          type="text"
          onChange={changeFirstValue}
          value={firstValue}
          className="input-value"
          placeholder="Value"
        ></input>
        <DropDownSecondCoin secondCoin={setSecondCoin}/>
        <label id="answer"></label>
        <button type="button" onClick={convert}>
          Converter
        </button>
      </div>
    </div>
  );
}
