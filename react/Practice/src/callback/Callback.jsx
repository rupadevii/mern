import Child from "./Child";
import { useState, useCallback } from "react";

export default function UseCallback() {
    console.log("Parent component rendered.");
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const handleChange = useCallback((e) => {
        console.log("Input entered");
        setInput(e.target.value);
    }, []);

    return (
        <div>
        Usecallback
        <Child handleChange={handleChange} input={input} />
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        {count}
        </div>
    );
}
