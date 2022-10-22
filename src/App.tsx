import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./component/counter/Counter";
import Settings from "./component/settings/Settings";

function App() {
  const [counterValue, setCounterValue] = useState<number | null>(null);
  const [minCounterValue, setMinCounterValue] = useState<number>(0);
  const [maxCounterValue, setMaxCounterValue] = useState<number>(5);

  const error = isError(minCounterValue, maxCounterValue);
  const message = counterValue === null ? "Enter values and press 'set'" : "";

  useEffect(() => {
    const data = localStorage.getItem("data");

    if (data) {
      setMinCounterValue(JSON.parse(data).minValue);
      setMaxCounterValue(JSON.parse(data).maxValue);
      setCounterValue(JSON.parse(data).count);
    }
  }, []);

  useEffect(() => {
    const data = {
      minValue: minCounterValue,
      maxValue: maxCounterValue,
      count: counterValue,
    };

    localStorage.setItem("data", JSON.stringify(data));
  }, [minCounterValue, maxCounterValue, counterValue]);

  function isError(minCounterValue: number, maxCounterValue: number) {
    if (
      minCounterValue < 0 ||
      maxCounterValue <= 0 ||
      minCounterValue >= maxCounterValue ||
      isNaN(minCounterValue) ||
      isNaN(maxCounterValue)
    ) {
      return "Incorrect value";
    } else return "";
  }

  const resetCount = () => {
    setCounterValue(minCounterValue);
  };

  const incrCounter = () => {
    counterValue !== null &&
      counterValue < maxCounterValue &&
      setCounterValue(counterValue + 1);
  };

  return (
    <div className="appWrapper">
      <Settings
        setMinCounterValue={setMinCounterValue}
        setMaxCounterValue={setMaxCounterValue}
        setCounterValue={setCounterValue}
        error={error}
        minCounterValue={minCounterValue}
        maxCounterValue={maxCounterValue}
        counterValue={counterValue}
      />

      <Counter
        error={error}
        incrCounter={incrCounter}
        resetCount={resetCount}
        counterValue={counterValue}
        minCounterValue={minCounterValue}
        maxCounterValue={maxCounterValue}
        message={message}
      />
    </div>
  );
}

export default App;
