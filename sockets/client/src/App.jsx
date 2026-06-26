import { useEffect, useState } from "react";
import { socket } from "./socket";

export default function App() {
    const [messages, setMessages] = useState([])
    const [input, setInput] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        socket.connect()

        socket.on('connect', () => {
            console.log("connected")
        })

        socket.on('send_history', (data) => {
            console.log(data)
            setMessages(data)
        })

        socket.on('message', (data) => {
            console.log(data)
            setMessages(prev => ([...prev, data]))
        })

        return () => {
            socket.off("message")
            socket.disconnect()
        };
    }, [])

    function handleSubmit(e){
        e.preventDefault()

        socket.emit('message', {name, message: input})

        setInput("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="message" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Submit</button>
            </form>

            <div>
                {messages.map((item, index) => (
                    <div key={index}>{item.name}-{item.message}</div>
                ))}
            </div>
        </div>
    )
}
