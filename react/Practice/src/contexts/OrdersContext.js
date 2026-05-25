import { createContext, useState, useEffect } from "react";

export const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const [orders, setOrders] = useState();

    useEffect(() => {
        async function fetchOrderPics() {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await res.json();
        setOrders(data);
        }
        fetchOrderPics();
    }, []);
    console.log(orders);
    
    return (
        <OrdersContext.Provider value={{ orders }}>
        {children}
        </OrdersContext.Provider>
    );
};
