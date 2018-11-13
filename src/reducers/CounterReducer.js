import { useReducer } from "react";

function useCounterReducer(initial) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "INCREMENT":{
        const ans = state.counter + 1;
        return {
          ...state,
          counter: ans,
        };
      }
      case "DECREMENT": {
        const ans = state.counter - 1;
        return {
          ...state,
          counter: ans,
        };
      }
      case "QUADRATIC":{
        const ans = state.counter * state.counter;
        return {
          ...state,
          counter: ans
        };
      }
      case "SQUARE ROOT": {
        if (state.counter < 0) {
          alert("Cannot perform square root on negative number!");
          return state;
        }
        const ans = Math.floor(Math.sqrt(state.counter));
        return {
          ...state,
          counter : ans
        };
      }

      default:
        return state;
    }
  }, {
    counter: initial,
  });
  return { state, dispatch }
}

export default useCounterReducer;