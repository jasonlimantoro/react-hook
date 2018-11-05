import React, { useState, useEffect, useReducer } from 'react';

const Counter = ({initial, autoIncrement, autoDecrement}) => {
  const { state, dispatch } = useCounterReducer(initial)
  useAutoCounter(autoIncrement, autoDecrement, dispatch);

  return (
    <div> 
      <span>{state.counter}</span>
      <div>
        <button onClick={() => dispatch({ type : 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT'})}>-</button>
        <button onClick={() => dispatch({ type: 'QUADRATIC'})}>^</button>
      </div>
    </div>
  );
}

function useCounter(initial){
  let [counter, setCounter] = useState(initial);
  let increment = () => {
    setCounter(counter + 1)
  }
  let decrement = () => {
    setCounter(counter - 1);
  }
  return {
    counter,
    increment,
    decrement,
  }
}

function useAutoCounter(autoIncrement, autoDecrement, dispatch){
  useEffect(() => {
    let operation;
    if(autoIncrement){
      operation = 'INCREMENT';
    } else if (autoDecrement){
      operation = 'DECREMENT';
    }
    const timeout = setTimeout(() => {
      dispatch({ type : operation })
    }, 1000);
    return () => clearTimeout(timeout);
  });
}

function useCounterReducer(initial){
    const [ state, dispatch ] = useReducer((state, action) => {
    switch(action.type){
      case "INCREMENT":
        return {
          ...state,
          counter : state.counter + 1,
        }
      case "DECREMENT":
        return {
          ...state,
          counter : state.counter - 1,
        }
      case "QUADRATIC":
        return {
          ...state,
          counter: state.counter * state.counter
        }
      default:
        return state;
    } 
  }, {
    counter : initial, 
  });
  return { state, dispatch }
}

export default Counter;