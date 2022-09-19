import React, {useEffect, useState} from 'react'
import './App.css'
import Counter from "./component/counter/Counter";
import Settings from "./component/settings/Settings";


function App() {

    const [counterValue, setCounterValue] = useState<number | string>('')
    const [minCounterValue, setMinCounterValue] = useState<number>(0)
    const [maxCounterValue, setMaxCounterValue] = useState<number>(0)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        !counterValue && setCounterValue('Enter values and press \'set\'')
        let localStorageCounterValue = localStorage.getItem('counterValue')
        localStorageCounterValue && setCounterValue(JSON.parse(localStorageCounterValue))


    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counterValue))
    }, [counterValue])


    const resetCount = () => {
        setCounterValue(minCounterValue)
    }

    const incrCounter = () => {
        counterValue < maxCounterValue && typeof counterValue === 'number' && setCounterValue(counterValue + 1)
    }

    return (
        <div className="appWrapper">
            <Settings
                setMinCounterValue={setMinCounterValue}
                setMaxCounterValue={setMaxCounterValue}
                setCounterValue={setCounterValue}
                setError={setError}
                error={error}
                counterValue={counterValue}
            />

            <Counter
                error={error}
                incrCounter={incrCounter}
                resetCount={resetCount}
                counterValue={counterValue}
                minCounterValue={minCounterValue}
                maxCounterValue={maxCounterValue}/>

        </div>
    );
}

export default App;
