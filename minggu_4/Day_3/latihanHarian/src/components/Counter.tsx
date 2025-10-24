import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";
import type { AppDispatch, RootState } from "../app/store";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="p-4 border rounded-lg shadow-md max-w-sm">
      <h2 className="text-xl font-bold mb-2">Counter: {count}</h2>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={() => dispatch(incrementByAmount(25))}
        >
          +25
        </button>
      </div>
    </div>
  );
}
