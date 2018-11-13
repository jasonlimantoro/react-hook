import React, { useEffect, } from 'react';
import useCounterReducer from "../reducers/CounterReducer";
import * as CounterActionCreators from "../actions/CounterAction";


const Counter = ({ initial, autoIncrement, autoDecrement }) => {
  const { state, dispatch } = useCounterReducer(initial);
  useAutoCounter(autoIncrement, autoDecrement, dispatch);

  const boundIncrement = () => (
    dispatch(CounterActionCreators.increment())
  );
  const boundDecrement = () => (
    dispatch(CounterActionCreators.decrement())
  );
  const boundQuadratic = () => (
    dispatch(CounterActionCreators.quadratic())
  );
  const boundSqrt = () => (
    dispatch(CounterActionCreators.sqrt())
  );

  return (
    <div>
      <span>{state.counter}</span>
      <div>
        <button onClick={boundIncrement}>+</button>
        <button onClick={boundDecrement}>-</button>
        <button onClick={boundQuadratic}>^</button>
        <button onClick={boundSqrt}>&#8730;</button>
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