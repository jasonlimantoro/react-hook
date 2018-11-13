import { useEffect } from "react";
import * as CounterActionCreators from "../actions/CounterAction";

export default function useAutoCounter(autoIncrement, autoDecrement, dispatch, start = true, speed = 1) {
  useEffect(() => {
    let action;
    if (!start) return;
    if (autoIncrement) {
      action = CounterActionCreators.increment()
    } else if (autoDecrement) {
      action = CounterActionCreators.decrement();
    } else {
      action = { type: "UNKNOWN" }
    }
    const timeout = setTimeout(() => {
      dispatch(action)
    }, 1/speed * 1000);
    return () => clearTimeout(timeout);
  });
}