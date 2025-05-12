import React, {useState} from "react";
import './Calculate.css';

const Calculate = () => {
    const [inputValue, setInputValue] = useState("0");

    const clearInput = () => {
        setInputValue("0");
    };

    const deleteLastEntry =() => {
        setInputValue(inputValue.slice(0,-1) || "0");
    };

    const handleButtonClick = (value) => {
            if (inputValue === "0" && !isNaN(value)) {
                setInputValue(value);
            } else if (inputValue === "NaN") {
                setInputValue("");
            } else {
                setInputValue(inputValue + value);
            }
    };

    const calculateResult = () => {
        try {
            setInputValue(eval(inputValue));
        } catch (error) {
            setInputValue("NaN");
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="calc-text">
                <p id="user-input">{inputValue}</p>
            </div>
            <div className="calc-keys">
                <button id="handler" onClick={clearInput}>AC</button>
                <button id="handler" onClick={deleteLastEntry}>DEL</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                {[7, 8, 9].map(num => (
                    <button key={num} onClick={() => handleButtonClick(num.toString())}>{num}</button>
                ))}
                {[4, 5, 6].map(num => (
                    <button key={num} onClick={() => handleButtonClick(num.toString())}>{num}</button>
                ))}
                {[1, 2, 3, 0].map(num => (
                    <button key={num} onClick={() => handleButtonClick(num.toString())}>{num}</button>
                ))}
                <button id="handler" onClick={() => handleButtonClick('+')}>+</button>
                <button id="handler" onClick={() => handleButtonClick('*')}>*</button>
                <button id="handler"  onClick={() => handleButtonClick('-')}>-</button>
                <button id="handler" onClick={() => handleButtonClick('/')}>/</button>
                <button id="handler" onClick={() => handleButtonClick('%')}>%</button>
                <button id="handler"  onClick={calculateResult}>=</button>
            </div>
        </div>
    );
};


export default Calculate;