import React, { ChangeEvent } from "react";
import s from "./Settings.module.css";
import { Button } from "../button/Button";

type SettingsPropsType = {
  setMinCounterValue: (value: number) => void;
  setMaxCounterValue: (value: number) => void;
  setCounterValue: (value: number | null) => void;
  error: string;
  minCounterValue: number;
  maxCounterValue: number;
  counterValue: number | null;
};

const Settings: React.FC<SettingsPropsType> = (props) => {
  const {
    setMaxCounterValue,
    setMinCounterValue,
    setCounterValue,
    error,
    counterValue,
    minCounterValue,
    maxCounterValue,
  } = props;

  const inputClasses = error ? s.error : s.input;
  const isButtonDisabled = !!error || counterValue !== null;

  const setSettingsHandler = () => {
    setCounterValue(minCounterValue);
  };

  const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStartValue = Math.floor(e.currentTarget.valueAsNumber);

    setMinCounterValue(newStartValue);
    setCounterValue(null);
  };

  const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMaxValue = Math.floor(e.currentTarget.valueAsNumber);

    setMaxCounterValue(newMaxValue);
    setCounterValue(null);
  };

  const onKeyDownInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ".") {
      e.preventDefault();
    }
  };

  return (
    <div className={s.counterSettings}>
      <div className={s.options}>
        <div className={s.item}>
          <label htmlFor={"max-value"}>Max value</label>
          <input
            type="number"
            value={maxCounterValue.toString()}
            onChange={changeMaxValueHandler}
            onKeyDown={onKeyDownInputHandler}
            className={inputClasses}
            id={"max-value"}
          />
        </div>
        <div className={s.item}>
          <label htmlFor={"min-value"}>Start value</label>
          <input
            type="number"
            value={minCounterValue.toString()}
            onChange={changeStartValueHandler}
            onKeyDown={onKeyDownInputHandler}
            className={inputClasses}
            id={"min-value"}
          />
        </div>
      </div>
      <div className={s.buttonBlockWrapper}>
        <Button onClick={setSettingsHandler} disabled={isButtonDisabled}>
          Set
        </Button>
      </div>
    </div>
  );
};

export default Settings;
