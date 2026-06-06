import { useEffect, useState } from "react";

export default function Timer() {
    const [input, setInput] = useState("");
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    function startTimer(e) {
        e.preventDefault();
        setTime(Number(input));
        setStart(true);
    }
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    useEffect(() => {
        if (!start || time <= 0) return;
            let timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [start, time]);

  return (
    <div>
        <form>
            <h2>Timer</h2>
            <label htmlFor="time">Enter time (in seconds)</label>
            <input
                type="number"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                    setStart(false);
                }}
                id="time"
            />
            <button onClick={startTimer} disabled={start}>
                Start
            </button>
        </form>

        <div>
            <button disabled={!start} onClick={() => setStart(false)}>
                Pause
            </button>
            <button
            onClick={() => {
                setTime(0);
                setStart(false);
            }}
            >
            Reset
            </button>
        </div>

        <div
            style={{
            border: "2px solid black",
            height: "8px",
            borderRadius: "10px",
            }}
        >
            <div
            style={{
                backgroundColor: "red",
                width: `${(time / input) * 100}%`,
                height: "8px",
            }}
            ></div>
        </div>
        <div>
            <h1>
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </h1>
        </div>

        <div>{start && time === 0 && <p>Time's up</p>}</div>
    </div>
  );
}
