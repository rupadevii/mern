import { Link } from "react-router-dom";
import { HomeContext } from "../context/HomeContext";
import { useContext } from "react";
import KanbanBoard from "../ques/KanbanBoard";
import AutoSaveForm from "../ques/AutoSaveForm";
import Accordion from "../ques/Accordion";
import Suggested from "../ques/Suggested";
import State from "../hooks/State";
import Ref from "../hooks/Ref";
import Ref2 from "../hooks/Ref2";
import Effect from "../hooks/Effect";
import Memo from "../hooks/Memo";
import SearchComponent from "../debounce/SearchComponent";
import Carousel from "../ques/Carousel";
import SortableList from "../ques/SortableList";
import UndoRedo from "../ques/UndoRedo";
import Todo from "../ques/Todo";
import Tabs from "../ques/Tabs";
import Debounce from "../debounce/Debounce";
import Throttle from "../ques/Throttle";
import Dashboard from "../lazy-loading/Dashboard";
import ExpenseTracker from "../ques/ExpenseTracker";

export default function Home() {
    const { userInfo } = useContext(HomeContext);

    return (
        <div>
            <h1>Home</h1>
            <div>
                <h2>{userInfo.name}</h2>
                <p>{userInfo.age}</p>
            </div>
            <div>
                <KanbanBoard/>
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
                <Dashboard/>
                <ExpenseTracker/>

            </div>
            <Link to="/products">Products</Link>
        </div>
    );
}
