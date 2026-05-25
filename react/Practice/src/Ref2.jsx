import { useRef } from "react";

export default function Ref2() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Click</button>
        </div>
    );
}
