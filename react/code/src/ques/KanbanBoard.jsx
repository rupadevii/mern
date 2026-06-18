import { useState } from 'react';
const columns = ["todo", "in-progress", "completed"];

export default function KanbanBoard() {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([])
    const [text, setText] = useState("")

    const addTask = () => {
        setTasks(prev => [...prev, {id: Date.now(), status: "todo", name: input, isEditing: false}])
        setInput("")
    };

    const moveTask = (id, direction) => {
        let currStatusIndex = columns.indexOf(tasks.find(item => item.id === id).status)

        if (direction === "left") {
            currStatusIndex--
        } else {
            currStatusIndex++
        }

        setTasks(prev => prev.map(item => item.id === id ? { ...item, status:columns[currStatusIndex]}: item))
    };

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(item => item.id!==id))
    };

    function handleKeyDown(e, id) {
        if (e.key === "Enter") {
        saveTitle(id)
        }
    }
    const saveTitle = (id) => {
        setTasks(prev => prev.map(item => item.id===id ? {...item, name: text}: item))

    };

    return (
        <div>
            <h2>Kanban Board</h2>
            <input
                data-testid="task-input"
                placeholder="Enter task"
                className="inputBox"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                data-testid="add-task-button"
                className="addTaskBtn"
                onClick={addTask}
            >
                Add Task
            </button>
            <div className="kanban-board">
                {columns.map((col) => (
                    <div key={col} className="column" data-testid={`column-${col}`}>
                        <h4>{col.replace("-", " ").toUpperCase()}</h4>
                        <div>{tasks.filter(task => task.status === col).map(item => (
                            <div data-testid={`task=${item.id}`}>
                                {item.isEditing && (
                                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => handleKeyDown(e, item.id)} onBlur={() => saveTitle(item.id)} data-testid={`task-title-edit-${item.id}`} />
                                )}
                                    <span data-testid={`task-title-${item.id}`}>{item.name}</span>
                                    {item.status === "todo" && (
                                    <button onClick={() => moveTask(item.id, "right")} data-testid={`move-right-${item.id}`}>{"->"}</button>
                                )}
                                {item.status === "in-progress" && (
                                    <>
                                        <button onClick={() => moveTask(item.id, "left")} data-testid={`move-left-${item.id}`}>{"<-"}</button>
                                        <button onClick={() => moveTask(item.id, "right")} data-testid={`move-right-${item.id}`}>{"->"}</button>
                                    </>
                                )}
                                {item.status === "completed" && (
                                <button onClick={() => moveTask(item.id, "left")} data-testid={`move-left-${item.id}`}>{"<-"}</button>
                                )}
                                <button onClick={() => setTasks(prev => prev.map(tsk => tsk.id===item.id ? {...tsk, isEditing: !tsk.isEditing} : tsk))} data-testid={`edit-button-${item.id}`}>Edit</button>
                                <button onClick={() => deleteTask(item.id)} data-testid={`delete-button-${item.id}`}>Delete</button>
                            </div>))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
