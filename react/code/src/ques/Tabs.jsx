import {useState} from 'react'

const tabs = [
    { title: "Tab 1", content: "This is the content of the tab 1"},
    { title: "Tab 2", content: "This is the content of the tab 2"},
    { title: "Tab 3", content: "This is the content of the tab 3"},
    { title: "Tab 4", content: "This is the content of the tab 4"},
    { title: "Tab 5", content: "This is the content of the tab 5"}
]
export default function Tabs() {
    const [currIndex, setCurrIndex] = useState(0)
    return (
        <div>
            <div style={{display: "flex", gap: "10px"}}>
                {tabs.map((tab, index) => (
                    <div key={index} onClick={() => setCurrIndex(index)} style={{borderBottom: currIndex===index ? "2px solid blue": "none", cursor: "pointer"}}>{tab.title}</div>
                ))}
            </div>
            {tabs[currIndex].content}
        </div>
    )
}
