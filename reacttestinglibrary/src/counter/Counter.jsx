import React, { useState } from "react";

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);

    const incrementCounterValue = () => {
        setCounterValue(counterValue + 1);
    }

    const decrementCounterValue = () => {
        setCounterValue(counterValue - 1);
    }

    return (
        <div>
            <h3 data-testid="header">My Counter</h3>
            <h3 data-testid="input">1</h3>
            <button onClick={incrementCounterValue} data-testid="add-button">+</button>
            <h2 data-testid="counter">{counterValue}</h2>
            <button onClick={decrementCounterValue} data-testid="minus-button">-</button>
        </div>
    );
}

export default Counter;