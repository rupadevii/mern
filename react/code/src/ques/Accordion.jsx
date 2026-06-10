import { useState } from 'react'

export default function Accordion() {
    const items = Array(10).fill().map((item, index) => (
        { id: index+1, title: `Title ${index+1}`, content: `This is content for article ${index+1}`}
    ))

    const [curr, setCurr] = useState(null)

    function handleClick(id){
        setCurr(prev => prev===id ? null : id)
    }

    return (
        <div>
            {items.map(item => (
                <div>
                    <div onClick={() => handleClick(item.id)} className="accordion-title">{item.title}</div>
                    {curr===item.id && (
                        <div className="accordion-content">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    )
}
