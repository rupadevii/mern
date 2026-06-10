import { useState } from 'react'

export default function Todo() {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        setTodos(prev => [...prev, {id:Date.now(), name: input, isCompleted: false}])
        setInput("")
    }
    console.log(todos)

    function handleChange(index){
        setTodos(prev => prev.map(item => item.id===index ? {...item, isCompleted: !item.isCompleted} : item))
    }

    function deleteTodo(index){
        setTodos(prev => prev.filter(item => item.id !== index))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            <div>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.isCompleted} onChange={() => handleChange(todo.id)}/>
                        <span className={`${todo.isCompleted && "completed"}`}>{todo.name}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </div>
        </div>
    )
}
