import { useContext } from "react";
import Effect from "./Effect";
import Memo from "./Memo";
import Ref from "./Ref";
import Ref2 from "./Ref2";
import State from "./State";
import { ThemeContext } from "./ThemeContext";
import { Route, Routes } from "react-router-dom";
import { HomeProvider } from "./context/HomeContext";
import Home from "./contextConsumers/Home";
import { OrdersProvider } from "./context/OrdersContext";
import Orders from "./contextConsumers/Orders";
import { ProductsProvider } from "./context/ProductsContext";
import Products from "./contextConsumers/Products";
import SignUp from "./SignUp";

export default function App() {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div>
            <div>
                {theme}
                <button onClick={() => setTheme(prev => prev==="light"? "dark": "light")}>Change Theme</button>
            </div>
            <State/>
            <Ref/>
            <Ref2/>
            <Effect/>
            <Memo/>

            <Routes>
                <Route path="/" element={<SignUp />} />
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
