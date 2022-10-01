import React from "react";
import s from './Display.module.css'


type PropsType = {
    counterValue: number | null
    maxCounterValue: number
    error: string
    message: string
}

export const Display: React.FC<PropsType> = (props) => {

    const {counterValue, maxCounterValue, error, message} = props;

    const errorClass = error ? s.error : ''
    const messageClass = counterValue === null ? s.message : ''
    const enoughClass = counterValue === maxCounterValue ? s.enough : ''

    return (
        <div className={`
        ${s.display} 
        ${errorClass} 
        ${messageClass} 
        ${enoughClass} `}>
            {
                error ? error : !!message ? message : counterValue
            }


        </div>
    )
}