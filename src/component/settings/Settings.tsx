import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Settings.module.css'
import {Button} from "../button/Button";


type SettingsPropsType = {
    setMinCounterValue: (value: number) => void
    setMaxCounterValue: (value: number) => void
    setCounterValue: (value: number | string) => void
    setError: (value: string) => void
    error: string
    counterValue: number | string

}
const Settings: React.FC<SettingsPropsType> = (props) => {

    const {setMaxCounterValue, setMinCounterValue, setCounterValue, error, setError, counterValue} = props;

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)

    if (startValue === maxValue || startValue > maxValue) {
        setError('Incorrect value!')
    } else setError('')

    useEffect(() => {
        let startValue = localStorage.getItem('startValue')

        if (startValue) {
            setStartValue(JSON.parse(startValue))
            setMinCounterValue(JSON.parse(startValue))
        }

        let maxValue = localStorage.getItem('maxValue')
        if (maxValue) {
            setMaxValue(JSON.parse(maxValue))
            setMaxCounterValue(JSON.parse(maxValue))
        }

    }, [])


    useEffect(() => {

        counterValue && setCounterValue('Enter values and press \'set\'')
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))


    }, [startValue, maxValue])


    const setSettingsHandler = () => {
        setMinCounterValue(startValue)
        setMaxCounterValue(maxValue)
        setCounterValue(startValue)

    }


    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newStartValue = Math.abs(Math.floor(e.currentTarget.valueAsNumber))


        setStartValue(newStartValue)


    }

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        let newMaxValue = Math.abs(Math.floor(e.currentTarget.valueAsNumber))
        setMaxValue(newMaxValue)


    }

    const onKeyDownInputHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === '.') {
            e.preventDefault()
        }
    }

    return (
        <div className={s.counterSettings}>
            <div className={s.options}>
                <div className={s.item}>
                    <span>max value</span>
                    <input
                        type="number"
                        value={maxValue.toString()}
                        onChange={changeMaxValueHandler}
                        onKeyDown={onKeyDownInputHandler}
                        className={`${error ? s.error : s.input}`}/>
                </div>
                <div className={s.item}>
                    <span>start value</span>
                    <input
                        type="number"
                        value={startValue.toString()}
                        onChange={changeStartValueHandler}
                        onKeyDown={onKeyDownInputHandler}
                        className={`${error ? s.error : s.input}`}/>
                </div>
            </div>
            <div className={s.buttonBlockWrapper}>
                <Button
                    className={s.settingButtonStyle}
                    onClick={setSettingsHandler}
                    disabled={!!error}>set</Button>
            </div>
        </div>
    );
}

export default Settings;

