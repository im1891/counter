import React, {useEffect, useState} from 'react'
import './App.css'
import Counter from "./component/counter/Counter";
import Settings from "./component/settings/Settings";


function App() {

    const [counterValue, setCounterValue] = useState<number | null>(null)
    const [minCounterValue, setMinCounterValue] = useState<number>(0)
    const [maxCounterValue, setMaxCounterValue] = useState<number>(5)
    const [error, setError] = useState<string>('')

    let message = counterValue === null ? 'Enter values and press \'set\'' : ''


    useEffect(() => {
        let data = localStorage.getItem('data')

        if (data) {
            setMinCounterValue(JSON.parse(data).minValue)
            setMaxCounterValue(JSON.parse(data).maxValue)
            setCounterValue(JSON.parse(data).count)
        }

    }, [])

    useEffect(() => {

        let data = {
            minValue: minCounterValue,
            maxValue: maxCounterValue,
            count: counterValue
        }
        localStorage.setItem('data', JSON.stringify(data))
    }, [minCounterValue, maxCounterValue, counterValue])


    const resetCount = () => {
        setCounterValue(minCounterValue)
    }

    const incrCounter = () => {
        counterValue !== null && counterValue < maxCounterValue && setCounterValue(counterValue + 1)

    }


    return (
        <div className="appWrapper">
            <Settings
                setMinCounterValue={setMinCounterValue}
                setMaxCounterValue={setMaxCounterValue}
                setCounterValue={setCounterValue}
                setError={setError}
                error={error}
                minCounterValue={minCounterValue}
                maxCounterValue={maxCounterValue}
                counterValue={counterValue}/>

            <Counter
                error={error}
                incrCounter={incrCounter}
                resetCount={resetCount}
                counterValue={counterValue}
                minCounterValue={minCounterValue}
                maxCounterValue={maxCounterValue}
                message={message}/>
        </div>
    );
}

export default App;
