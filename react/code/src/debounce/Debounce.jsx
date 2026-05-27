import { useEffect, useState } from "react";

export default function Debounce() {
    const [input, setInput] = useState("")
    const [debouncedValue, setDebouncedValue] = useState(null)

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebouncedValue(input)
        }, 2000)

        return () => clearTimeout(timer)

    }, [input])

    useEffect(() => {
        console.log(debouncedValue)
    }, [debouncedValue])

    return (
        <div>
            <form>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <p>{input}</p>
                <p>{debouncedValue}</p>
            </form>
        </div>
    )
}
