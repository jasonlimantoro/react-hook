import React from 'react';
import useCounterReducer from "../reducers/CounterReducer";
import  useAutoCounter  from "../effects/AutoCounterEffect";
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
  const boundReset = () => (
    dispatch(CounterActionCreators.reset())
  );

  return (
    <div>
      <span>{state.counter}</span>
      <div>
        <button onClick={boundIncrement}>+</button>
        <button onClick={boundDecrement}>-</button>
        <button onClick={boundQuadratic}>^</button>
        <button onClick={boundSqrt}>&#8730;</button>
        <button onClick={boundReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;