import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {Button} from "../button/Button";


type SettingsPropsType = {
    setMinCounterValue: (value: number) => void
    setMaxCounterValue: (value: number) => void
    setCounterValue: (value: number | null) => void
    setError: (value: string) => void
    error: string
    minCounterValue: number
    maxCounterValue: number
    counterValue: number | null
}

const Settings: React.FC<SettingsPropsType> = (props) => {

    const {
        setMaxCounterValue,
        setMinCounterValue,
        setCounterValue,
        error,
        setError,
        counterValue,
        minCounterValue,
        maxCounterValue,
    } = props;


    if (minCounterValue < 0 || maxCounterValue <= 0 || minCounterValue >= maxCounterValue || isNaN(minCounterValue) || isNaN(maxCounterValue)) {
        setError('Incorrect value')
    } else setError('')

    const setSettingsHandler = () => {
        setCounterValue(minCounterValue)
    }

    const changeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        let newStartValue = parseInt((e.currentTarget.value))

        setMinCounterValue(newStartValue)
        setCounterValue(null)
    }

    const changeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {

        let newMaxValue = parseInt(e.currentTarget.value)

        setMaxCounterValue(newMaxValue)
        setCounterValue(null)
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
                        value={maxCounterValue.toString()}
                        onChange={changeMaxValueHandler}
                        onKeyDown={onKeyDownInputHandler}
                        className={`${error ? s.error : s.input}`}/>
                </div>
                <div className={s.item}>
                    <span>start value</span>
                    <input
                        type="number"
                        value={minCounterValue.toString()}
                        onChange={changeStartValueHandler}
                        onKeyDown={onKeyDownInputHandler}
                        className={`${error ? s.error : s.input}`}/>
                </div>
            </div>
            <div className={s.buttonBlockWrapper}>
                <Button
                    className={s.settingButtonStyle}
                    onClick={setSettingsHandler}
                    disabled={!!error || counterValue !== null}>set</Button>
            </div>
        </div>
    );
}

export default Settings;

