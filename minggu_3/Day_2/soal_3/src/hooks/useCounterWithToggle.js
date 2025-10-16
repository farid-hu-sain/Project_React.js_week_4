import useCounter from "./useCounter.js";
import useToggle from "./useToggle.js";

export default function useCounterWithToggle(initialCount = 0) {
  const counter = useCounter(initialCount);
  const toggle = useToggle(true);

  return {
    ...counter,
    value: toggle[0],
    toggle: toggle[1],
  };
}
