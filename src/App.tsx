import React, {useState} from 'react';
import './App.css';
import {Button} from './Components/Button/Button';
import {Counter} from './Components/Counter/Counter';

function App() {
    const [minCount, maxCount] = [0, 5]
    const [counter, counterSet] = useState<number>(minCount)
    const addClick = () => {
        if (counter < maxCount) {
            counterSet(counter + 1)
        }
    }
    const resetClick = () => {
        counterSet(minCount)
    }
    return (
        <div className="backgrounde">
            <div className="App container">
                <Counter value={counter}/>
                <div className="Buttons">
                    <Button isDisabled={counter === maxCount} callBack={addClick}>inc</Button>
                    <Button isDisabled={counter === minCount} callBack={resetClick}>reset</Button>
                </div>
            </div>
        </div>
    );
}

export default App;