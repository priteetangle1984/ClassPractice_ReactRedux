import { useReducer, useState } from "react";

// THIS is the reducer function that describes how the state gets updated
function reducer(state, action) {
  // each action.type is a different way to modify the state
  switch (action.type) {
    case "increment": {
      // return state + 1;
      // this is demonstrating how payload can be used
      return state + action.payload.step;
    }
    case "decrement": {
      // return state - 1;
      // this is demonstrating how payload can be used
      return state - action.payload.step;
    }
    case "reset": {
      return 0;
    }
    default: {
      throw Error("unknown action: " + action.type);
    }
  }
}

export default function ReducerCounter() {
  // count is state
  // dispatch is a function that we can invoke
  // reducer describes how the state gets updated based on the action
  const [count, dispatch] = useReducer(reducer, 0);

  //
  // this is an extension that shows us how payload works
  const [step, setStep] = useState(1);

  return (
    <div>
      <h1>{count}</h1>
      <ActionButton
        type="increment"
        payload={{ step: step }}
        dispatch={dispatch}
      >
        Increment
      </ActionButton>
      <ActionButton
        type="decrement"
        payload={{ step: step }}
        dispatch={dispatch}
      >
        Decrement
      </ActionButton>
      <ActionButton type="reset" dispatch={dispatch}>
        Reset
      </ActionButton>
      <br />
      <NumberInput state={step} setState={setStep} />
    </div>
  );
}

// payload will be demonstrated in the expansion of this example
function ActionButton({ children, dispatch, type, payload }) {
  // children are the Increment and Decrement strings that are visible to the user on the button
  // console.log(children)
  return (
    <button onClick={() => dispatch({ type: type, payload: payload })}>
      {children}
    </button>
  );
}

function NumberInput({ state, setState }) {
  return (
    <input
      className="numberInput"
      type="number"
      step="1"
      value={state}
      onChange={(e) => setState(Number(e.target.value))}
    />
  );
}
