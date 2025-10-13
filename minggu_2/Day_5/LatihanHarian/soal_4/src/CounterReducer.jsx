import { useReducer } from "react";

 function CounterReducer(State, action) {
    switch (action.type){
        case 'increment':
            return {count: State.count + 1};
        case 'decrement':
            return {count: State.count - 1};
        case 'reset':
            return {count: 0};
        default:
            return State;    
    }    
}

export default function CounterWithReducer() {
    const [counterState, dispacth] = useReducer(CounterReducer, {count: 0})

    return(
        <>
            <h2>Counter</h2>
            <p>count: {counterState.count}</p>
            <button onClick={() => dispacth({type: 'increment'})}>Increment</button>
            <button onClick={() => dispacth({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispacth({type: 'reset'})}>Reset</button>            </>

    )
    
}