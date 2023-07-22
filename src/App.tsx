import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEventHandler, useState} from 'react';
import './App.css';
import {Counter} from './Components/Counter/Counter';
import {Button} from './Components/Button/Button';

function App() {
    const [minCount, maxCount] = [0, 5]
    const [counterValue, counterValueSet] = useState(minCount)
    const [inputValue, setInputValue] = useState('');
    const addValue = () => {
        if (counterValue < maxCount) {
            counterValueSet(counterValue + 1)
        }
    }
    const resetValue = () => {
        counterValueSet(minCount)
    }
    const limitToDigits = (event: ChangeEvent<HTMLInputElement>) => {
        const inputElement = event.target;
        const inputValue = inputElement.value;
        setInputValue(inputElement.value)
        const digitsOnly = inputValue.replace(/[^\d]/g, '');
        inputElement.value = digitsOnly;
    };

    function handleArrowKeys(event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    }

    function setButtonCklick() {

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

            <div className="Wrapper__Counter">
                <div className="Wrapper__Settings">
                    <div className="Wrapper__Settings-Input">
                        <div>max value:</div>
                        <input className="Input" onInput={limitToDigits} maxLength={2}
                               onKeyDown={handleArrowKeys} value={inputValue}></input>
                    </div>
                    <div className="Wrapper__Settings-Input">
                        <div>start value:</div>
                        <input className="Input" onInput={limitToDigits} maxLength={2}
                               onKeyDown={handleArrowKeys}></input>
                    </div>
                </div>
                <div>
                    <Button name={'Set'} callBack={setButtonCklick} isDisabled={counterValue === minCount}/>
                </div>
            </div>
        </div>
    );
}

export default App;