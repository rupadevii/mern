import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data = await res.json();
                // console.log(data);
                setProducts(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{products, loading}}>
            {children}
        </ProductsContext.Provider>
    )
};
