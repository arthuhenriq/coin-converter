import React from "react";
import { useState, useEffect } from "react";
import { DropDownSecondCoin } from "./DropDownSecondValue";
import style from "../styles/style.css";

export function Converter({ firstCoin }) {
  const [coinName, setCoinName] = useState("BRL");
  const [firstValue, setFirstValue] = useState(0);
  const [secondCoin, setSecondCoin] = useState("USD");
  const [price, setPrice] = useState(0);

  const changeFirstValue = function (e) {
    setFirstValue(e.target.value);
  };

  useEffect(() => {
    if (secondCoin === "BTC") {
      setCoinName("Moedas");
    } else {
      setCoinName("BRL");
    }
  }, [secondCoin]);

  const convert = async function () {
    const url = `https://economia.awesomeapi.com.br/json/last/${secondCoin}-${firstCoin}`;

    const response = await fetch(url);
    const result = await response.json();

    setPrice(result[`${secondCoin}${firstCoin}`]["bid"]);
    let finalValue = firstValue * price;

    if (secondCoin === "USD") {
      const option = { style: "currency", currency: "USD" };
      let finalValueFormated = new Intl.NumberFormat("en-US", option);
      let finalAnswer = finalValueFormated.format(finalValue);

      if (price) {
        document.getElementById("answer").innerHTML = finalAnswer;
      }
    } else if (secondCoin === "EUR") {
      const option = { style: "currency", currency: "EUR" };
      let finalValueFormated = new Intl.NumberFormat("en-DE", option);
      let finalAnswer = finalValueFormated.format(finalValue);

      if (price) {
        document.getElementById("answer").innerHTML = finalAnswer;
      }
    } else {
      const option = { style: "currency", currency: "BRL" };
      let finalValueFormated = new Intl.NumberFormat("pt-BR", option);
      let finalAnswer = finalValueFormated.format(finalValue);

      if (price) {
        document.getElementById("answer").innerHTML = finalAnswer;
      }
    }
  };

  useEffect(() => {
    convert();
  }, [secondCoin]);

  return (
    <div className="body">
      <div className="card">
        <h1 className="title">Coin Converter</h1>
        <label id="labelCoin">{coinName}</label>
        <input
          type="number"
          step={"0.01"}
          min={"0.01"}
          onChange={changeFirstValue}
          value={firstValue}
          className="input-value"
          placeholder="Value"
        ></input>
        <DropDownSecondCoin secondCoin={setSecondCoin} />
        <label id="answer"></label>
        <button className="custom-button" type="reset" onClick={convert}>
          Converter
        </button>
      </div>
    </div>
  );
}
