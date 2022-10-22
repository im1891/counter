import React from "react";
import s from "./Display.module.css";
import { getClasses, GetClassesArg } from "../../utils/helpers";

type PropsType = {
  counterValue: number | null;
  maxCounterValue: number;
  error: string;
  message: string;
};

export const Display: React.FC<PropsType> = (props) => {
  const { counterValue, maxCounterValue, error, message } = props;

  const classNames: GetClassesArg = [
    { condition: true, className: s.display },
    { condition: !!error, className: s.error },
    { condition: counterValue === null, className: s.message },
    { condition: counterValue === maxCounterValue, className: s.limit },
  ];

  const getText = () => {
    if (error) return error;
    if (!!message) return message;
    return counterValue;
  };

  const text = getText();
  const classes = getClasses(classNames);

  return <div className={classes}>{text}</div>;
};
