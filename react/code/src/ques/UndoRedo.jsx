import { useState } from 'react';

function UndoRedo() {
    const [text, setText] = useState("");
    const [history, setHistory] = useState([""])
    const [currentStep, setCurrentStep] = useState(0)
    
    function handleChange(e) {
        const index = currentStep
        setCurrentStep(prev => prev+1)
        setText(e.target.value)
        const newItems = history.filter((item, id) => id<=index)
        setHistory([...newItems, e.target.value])
    }

    function handleRedo() {
        let index = currentStep
        setCurrentStep(prev => prev + 1)
        setText(history[index+1])
    }

    function handleUndo() {
        let index = currentStep
        setCurrentStep(prev => prev - 1)
        setText(history[index-1])
    }

    return (
        <div className="undoRedo">
        <h1>Undo Redo History</h1>

        <div className="container">
            <textarea onChange={handleChange} value={text}  data-testid="textarea" />

            <div className="buttons">
            <button onClick={handleRedo} data-testid="redo-button" disabled={currentStep===history.length-1}>
                Redo
            </button>
            <button onClick={handleUndo} data-testid="undo-button" disabled={currentStep===0}>
                Undo
            </button>
            </div>
                {history.map(item => (
                <div>{item}</div>
                ))}
        </div>
        </div>
    );
}

export default UndoRedo;
