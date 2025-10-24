import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../App/store";
import { decrement, increment, incrementByValue } from "../features/counter/counterSlice";

export default function Counter(){
    const count = useSelector((state:RootState) => state.counter.value)
    const dispatch = useDispatch()
    return(
        <>
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>tambah</button>
        <button onClick={() => dispatch(decrement())}>kurang</button>
        <button onClick={() => dispatch(incrementByValue(10))}>tambah 10</button>
        </>
    )
}