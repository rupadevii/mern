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
import Debounce from "./debounce/Debounce";
import Throttle from "./Throttle";
import SearchComponent from "./debounce/SearchComponent";
import Suggested from "./ques/Suggested";
import Accordion from "./ques/Accordion";
import Carousel from "./ques/Carousel";
import SortableList from "./ques/SortableList";
import UndoRedo from "./ques/UndoRedo";
import Todo from "./ques/Todo";
import Tabs from "./ques/Tabs";
import KanbanBoard from "./ques/KanbanBoard";
// import MultiSelectDropdown from "./ques/MultiSelectDropDown";
// import SearchableDropDown from "./ques/SearchableDropDown";
import AutoSaveForm from "./ques/AutoSaveForm";
import Dashboard from "./lazy-loading/Dashboard";
import ExpenseTracker from "./ques/ExpenseTracker";

export default function App() {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
        <div>
            <div>
                {theme}
                <button onClick={() => setTheme(prev => prev==="light"? "dark": "light")}>Change Theme</button>
            </div>
            {/* <MultiSelectDropdown/>
            <SearchableDropDown/> */}
            {/* <KanbanBoard/>
            <AutoSaveForm/>
            <Accordion/>
            <Suggested/>
            <State/>
            <Ref/>
            <Ref2/>
            <Effect/>
            <Memo/>
            <SearchComponent/>
            <Carousel/>
            <SortableList/>
            <UndoRedo/>
            <Todo/>
            <Tabs/>
            <Debounce/>
            <Throttle/>
            <Dashboard/> */}
            {/* <ExpenseTracker/> */}

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
