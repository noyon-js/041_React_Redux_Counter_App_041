import { useDispatch, useSelector } from "react-redux";
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from "../services/Action/counterAction";


export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounterAction());
  };

  const handleDecrement = () => {
    dispatch(decrementCounterAction());
  };

  const handleReset = () => {
    dispatch(resetCounterAction());
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
