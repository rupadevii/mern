import { useState, useMemo } from "react";

export default function Memo() {
    const [num, setNum] = useState("");
    const [count, setCount] = useState(0);

    const value = useMemo(() => {
        console.log("Calculating");
        let sum = 0;
        for (let i = 0; i < 100000; i++) {
            sum += i;
        }
        return sum + Number(num);
    }, [num]);

    return (
        <div>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        {count}
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>

        <h1>Value is: {value}</h1>
        <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
        />
        </div>
    );
}
