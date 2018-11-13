import React, { useState } from 'react';
import useCounterReducer from "../reducers/CounterReducer";
import useAutoCounter from "../effects/AutoCounterEffect";
import { reset } from "../actions/CounterAction";

const MAXIMUM_SPEED = 32;
const MINIMUM_SPEED = 0.125;

const Timer = ({ initial, autoIncrement, autoDecrement }) => {
  const [ start, setStart ] = useState(false);
  const [ speed, setSpeed ] = useState(1);
  const { state, dispatch } = useCounterReducer(initial);
  useAutoCounter(autoIncrement, autoDecrement, dispatch, start, speed);
  const toggleStart = () => {
    setStart(!start);
  };
  const speedUp = (scale) => {
    if (speed * scale > MAXIMUM_SPEED){
      alert("Maximum speed exceeded!");
      return;
    }
    if (speed * scale < MINIMUM_SPEED){
      alert("Minimum speed exceeded!");
      return;
    }

    setSpeed(speed * scale);
  };
  const resetSpeed = () => {
    setSpeed(1);
  };

  const resetTimer = () => {
    dispatch(reset());
    setStart(false);
    resetSpeed();
  };

  return (
    <div>
      <span>{state.counter}</span>
      <button onClick={toggleStart}>{start ? "Stop" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
      <div>
        current speed : x{speed}{"  "} <br/>
        <button onClick={() => speedUp(2)}>x2</button>
        <button onClick={() => speedUp(0.5)}>x0.5</button>
        <button onClick={resetSpeed}>Reset speed</button>
      </div>
    </div>
  );
};

export default Timer;
