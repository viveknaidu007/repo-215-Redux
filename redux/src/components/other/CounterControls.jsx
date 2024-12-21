import { useDispatch } from "react-redux";
import { increment } from "./counterSlice";
import { decrement } from "./counterSlice";
import { reset } from "./counterSlice";


const CounterControls = () => {
    const dispatch = useDispatch();
    const increaseHandler = () => {
        dispatch(increment())
    }
    return (
        <div>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick = {() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}


export default CounterControls;