import React from "react";
import s from './Display.module.css'


type PropsType = {
    counterValue: number | string
    maxCounterValue: number
    error: string
}

export const Display: React.FC<PropsType> = (props) => {

    const {counterValue, maxCounterValue, error} = props;
    const enoughClass = counterValue === maxCounterValue ? s.enough : '';
    const textValueClass = typeof counterValue === 'string' && s.textValue;
    const errorClass = error ? s.error : '';

    return (
        <div className={`${s.display}   
            ${enoughClass} 
            ${textValueClass} 
            ${errorClass}  `}>
            {error ? error : counterValue}
        </div>
    )
}