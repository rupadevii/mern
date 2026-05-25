import {useState} from 'react'

export default function State() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button
                onClick={() => setCount((prev) => prev - 1)}
                disabled={count === 0}
            >
                -
            </button>
            <span>{count}</span>
            <button
                onClick={() => setCount((prev) => prev + 1)}
                disabled={count === 10}
            >
                +
            </button>
        </div>
    );
}
