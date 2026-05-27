import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

function SearchComponent() {
    const [input, setInput] = useState("");
    const debouncedSearch = useDebounce(input, 1500);

    useEffect(() => {
        if (debouncedSearch) {
            console.log("input is", input);
        }
    }, [debouncedSearch]);

    return (
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
    );
}

export default SearchComponent;
