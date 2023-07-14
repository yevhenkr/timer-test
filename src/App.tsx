import React, {useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Button} from './Components/Button/Button';

function App() {
    const [minValueCounter, maxValueCounter] = [0, 5]
    const [couterValue, couterValueSet] = useState<number>(minValueCounter)

    const addCount = () => {
        couterValueSet(couterValue + 1)
        if (couterValue >= maxValueCounter) {
            resetCounter()
        }
    }
    const resetCounter = () => {
        couterValueSet(minValueCounter)
    }
    return (
        <div className={'backgrounde'}>
            <div className={'Countert'}>
                <div className={'Countert__Wrapper'}>
                    <Counter value={couterValue}/>
                </div>
                <div className={'Countert__Buutons'}>
                    <Button callBack={addCount} children={'incr'} isDisabled={couterValue === maxValueCounter}/>
                    <Button callBack={resetCounter} children={'reset'} isDisabled={couterValue === minValueCounter}/>
                </div>
            </div>
        </div>
    );
}

export default App;