import React from 'react';
import {Display} from "../display/Display";
import {Button} from "../button/Button";
import s from './Counter.module.css'


type CounterPropsType = {
    incrCounter: () => void
    resetCount: () => void
    counterValue: number | string
    minCounterValue: number
    maxCounterValue: number
    error: string
}

const Counter: React.FC<CounterPropsType> = (props) => {

    const {
        incrCounter,
        resetCount,
        counterValue,
        minCounterValue,
        maxCounterValue,
        error
    } = props

    return (
        <div className={s.counter}>

            <Display
                counterValue={counterValue}
                maxCounterValue={maxCounterValue}
                error={error}
            />

            <div className={s.buttonBlockWrapper}>
                <Button
                    onClick={incrCounter}
                    disabled={counterValue === maxCounterValue || typeof counterValue === 'string' || !!error}
                    className={s.counterButtonStyle}>inc</Button>

                <Button
                    onClick={resetCount}
                    disabled={counterValue === minCounterValue || typeof counterValue === 'string' || !!error}
                    className={s.counterButtonStyle}>reset</Button>
            </div>
        </div>
    );
};

export default Counter;