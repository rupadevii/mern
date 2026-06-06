import { useEffect } from 'react'

export default function Throttle() {
    function throttle(cb, delay){
        let last = 0
        return function(...args){
            let now = Date.now()
            if(now-last>=delay){
                last = now
                cb(...args)
            }
        }
    }

    useEffect(() => {
        const throttledValue = throttle(() => {
            console.log("scrolling...")
        }, 1000)

        window.addEventListener("scroll", throttledValue)

        return () => window.removeEventListener("scroll", throttledValue)
    })
    
    return (
        <div style={{height: "1500vh"}}>
            <h1 title="throttle">Throttle</h1>
            Throttle example
        </div>
    )
}
