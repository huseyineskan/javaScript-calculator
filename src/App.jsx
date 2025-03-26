import { useEffect, useState } from "react";
import "./assets/css/App.css";
import "./assets/css/Calculator.css";

function App() {
  const [inputValues, setinputValues] = useState(0);
  const [currentValue, setCurrenValue] = useState(0);

  const regex = /^[0-9]$/;

  function handleNumberClick(e) {
    const value = e.target.innerText;
    if (regex.test(value) && !isNaN(value)) {
      setinputValues((inputValues !== 0 ? inputValues : "") + value);

      if (currentValue === 0) {
        setCurrenValue(value);
      } else if (!isNaN(currentValue)) {
        setCurrenValue(currentValue.toString() + value.toString());
      } else {
        setCurrenValue(value);
      }
    }
  }

  function handleOperatorClick(e) {
    const operator = e.target.innerText;
    setinputValues(inputValues + operator);

    switch (operator) {
      case "+":
        setCurrenValue(operator);
        break;
      case "-":
        setCurrenValue(operator);
        break;
      case "*":
        setCurrenValue(operator);
        break;
      case "/":
        setCurrenValue(operator);
        break;
      default:
        break;
    }
  }

  function handleEqualClick() {
    const result = eval(inputValues);
    setinputValues(result);
    setCurrenValue(result);
    setinputValues(inputValues + "=" + result);
  }

  function resetAllValues() {
    setinputValues(0);
    setCurrenValue(0);
  }

  useEffect(() => {}, [handleNumberClick]);

  return (
    <section>
      <div className="calculator">
        <div className="screen">
          <div className="formulaScreen">{inputValues}</div>
          <div className="outputScreen" id="display">
            {currentValue}
          </div>
        </div>
        <div className="buttons">
          <button id="clear" onClick={resetAllValues}>
            AC
          </button>
          <button
            className="mathematical-operators"
            id="divide"
            onClick={handleOperatorClick}
          >
            /
          </button>
          <button id="seven" onClick={handleNumberClick}>
            7
          </button>
          <button id="eight" onClick={handleNumberClick}>
            8
          </button>
          <button id="nine" onClick={handleNumberClick}>
            9
          </button>
          <button
            className="mathematical-operators"
            id="multiply"
            onClick={handleOperatorClick}
          >
            *
          </button>
          <button id="four" onClick={handleNumberClick}>
            4
          </button>
          <button id="five" onClick={handleNumberClick}>
            5
          </button>
          <button id="six" onClick={handleNumberClick}>
            6
          </button>
          <button
            className="mathematical-operators"
            id="subtract"
            onClick={handleOperatorClick}
          >
            -
          </button>
          <button id="one" onClick={handleNumberClick}>
            1
          </button>
          <button id="two" onClick={handleNumberClick}>
            2
          </button>
          <button id="three" onClick={handleNumberClick}>
            3
          </button>
          <button
            className="mathematical-operators"
            id="add"
            onClick={handleOperatorClick}
          >
            +
          </button>
          <button id="zero" onClick={handleNumberClick}>
            0
          </button>
          <button id="decimal">.</button>
          <button id="equals" onClick={handleEqualClick}>
            =
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
