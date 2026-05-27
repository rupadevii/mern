import { useEffect, useState } from "react";

export const useDebounce = (value, milliseconds) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebouncedValue(value);
        }, milliseconds);

        return () => clearTimeout(timer);
    }, [value]);

    return debouncedValue;
};
