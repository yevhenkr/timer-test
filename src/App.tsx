import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEventHandler, useState} from 'react';
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
    const limitToDigits = (event: ChangeEvent<HTMLInputElement>) => {
        const inputElement = event.target;
        const inputValue = inputElement.value;
        // Удалить все символы, кроме цифр
        const digitsOnly = inputValue.replace(/[^\d]/g, '');

        // Переместить курсор в центр поля ввода
        // const midpoint = Math.floor(inputElement.maxLength / 2);
        // const centeredValue = digitsOnly.padStart(midpoint, ' ').padEnd(inputElement.maxLength, ' ');

        // Обновить значение поля ввода
        inputElement.value = digitsOnly;
    };

    function handleArrowKeys(event: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
        console.log('event = ' + event)
        // const inputElement = event.;
        // const inputValue = inputElement.value
        // const numberValue = parseInt(inputValue, 10);
        //
        // if (!isNaN(numberValue)) {
        //     if (event.key === 'ArrowUp') {
        //         event.preventDefault();
        //         inputElement.value = (numberValue + 1).toString();
        //         limitToDigits(inputElement.value);
        //     } else if (event.key === 'ArrowDown') {
        //         event.preventDefault();
        //         inputElement.value = (numberValue - 1).toString();
        //         limitToDigits(inputElement.value);
        //     }
        // }
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
                        <input className="Input"></input>
                    </div>
                    <div className="Wrapper__Settings-Input">
                        <div>start value:</div>
                        <input className="Input" onInput={limitToDigits} maxLength={2}
                               onKeyDown={handleArrowKeys}></input>
                    </div>
                </div>
                <div>
                    <Button name={'Set'} callBack={resetValue} isDisabled={counterValue === minCount}/>
                </div>
            </div>
        </div>
    );
}

export default App;