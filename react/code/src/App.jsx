import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import { HomeProvider } from "./context/HomeContext";
import Home from "./pages/Home";
import { OrdersProvider } from "./context/OrdersContext";
import Orders from "./contextConsumers/Orders";
import { ProductsProvider } from "./context/ProductsContext";
import Products from "./contextConsumers/Products";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export default function App() {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div>
            <div>
                {theme}
                <button onClick={() => setTheme(prev => prev==="light"? "dark": "light")}>Change Theme</button>
            </div>

            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login/>}/>
                
                <Route
                    path="/home"
                    element={
                    <HomeProvider>
                        <Home />
                    </HomeProvider>
                    }
                />
                <Route
                    path="/orders"
                    element={
                    <OrdersProvider>
                        <Orders />
                    </OrdersProvider>
                    }
                />
                <Route
                    path="/products"
                    element={
                    <ProductsProvider>
                        <Products />
                    </ProductsProvider>
                    }
                />
            </Routes>
        </div>
    )
}
