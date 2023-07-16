import React, {useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Button} from './Components/Button/Button';

function App() {
    const [minCount, maxCount] = [0, 5]
    const [counterValue, counterValueSet] = useState(minCount)
    const addValue = () => {
        if (counterValue < maxCount) {
            counterValueSet(counterValue + 1)
        }
    }
    const resetValue = () => {
        counterValueSet(minCount)
    }

    return (
        <div className="Wrapper">
            <div className="Wrapper__Counter">
                <Counter value={counterValue} color={`${counterValue === maxCount ? 'red' : 'white'}`}/>
                <div className="Button-Wrapper">
                    <Button name={'Add'} callBack={addValue} isDisabled={counterValue >= maxCount}/>
                    <Button name={'Reset'} callBack={resetValue} isDisabled={counterValue === minCount}/>
                </div>
            </div>
        </div>
    );
}

export default App;