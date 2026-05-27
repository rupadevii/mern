import React from "react";

const Child = React.memo(({ input, handleChange }) => {
    console.log("Child component rendered.");
    
    return (
        <div>
        <input type="text" value={input} onChange={handleChange} />
        </div>
    );
});

export default Child;
