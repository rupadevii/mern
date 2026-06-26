import { useEffect, useState } from "react";
import { socket } from "./socket";

export default function App() {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        // socket.connect()

        socket.on('connect', () => {
            console.log("connected")
        })

        socket.on('message', (data) => {
            console.log(data)
            setMessages(prev => ([...prev, data]))
        })

        return () => {
            socket.off("message")
        };
    }, [])

    function handleSubmit(e){
        e.preventDefault()

        socket.emit('message', input)

        setInput("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="message" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>

            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
        </div>
    )
}
