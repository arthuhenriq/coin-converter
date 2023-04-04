import { useState } from "react"
import style from '../styles/style.css'

export function Converter({firstCoin, secondCoin}) {

    const [firstValue, setFirstValue] = useState(0)
    const [finalValue, setFinalValue] = useState(2)

    const changeFirstValue = function (e) {
        setFirstValue(e.target.value);
    }

    return (
        <div className="body">
        <div className="card">
            <h1 className="title">Coin Converter</h1>
            <label>{firstCoin}</label>
            <input type="text" onChange={changeFirstValue} value={firstValue}></input>
            <label>{secondCoin}</label>
            <label>{firstValue * finalValue}</label>
            <button type="button">Converter</button>
        </div>
        </div>
    )
}