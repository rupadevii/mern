import { useState, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        name: "Rupa",
        age: 21,
    });
    return (
        <HomeContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </HomeContext.Provider>
    );
};
