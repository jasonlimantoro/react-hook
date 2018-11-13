import React, { useEffect, } from 'react';
import useCounterReducer from "../reducers/CounterReducer";


const Counter = ({ initial, autoIncrement, autoDecrement }) => {
  const { state, dispatch } = useCounterReducer(initial);
  useAutoCounter(autoIncrement, autoDecrement, dispatch);

  return (
    <div>
      <span>{state.counter}</span>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        <button onClick={() => dispatch({ type: 'QUADRATIC' })}>^</button>
        <button onClick={() => dispatch({ type: 'SQUARE ROOT' })}>&#8730;</button>
      </div>
    </div>
  );
};

function useAutoCounter(autoIncrement, autoDecrement, dispatch) {
  useEffect(() => {
    let operation;
    if (autoIncrement) {
      operation = 'INCREMENT';
    } else if (autoDecrement) {
      operation = 'DECREMENT';
    }
    const timeout = setTimeout(() => {
      dispatch({ type: operation })
    }, 1000);
    return () => clearTimeout(timeout);
  });
}

export default Counter;