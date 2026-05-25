import { useRef, useState } from "react";

export default function Ref() {
    const [count, setCount] = useState(0);
    const currentCount = useRef(0);

    function increaseCurrentCount() {
        currentCount.current++;
        console.log("Ref updated", currentCount.current);
    }

    function increaseCount() {
        setCount((prev) => prev + 1);
    }

    console.log("App rerendered.");
    return (
        <div>
        Current count is {currentCount.current}
        <button onClick={increaseCurrentCount}>+</button>
        <h3>{count}</h3>
        <button onClick={increaseCount}>Increase</button>
        </div>
    );
}

