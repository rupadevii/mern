import { useContext } from "react";
import Effect from "./Effect";
import Memo from "./Memo";
import Ref from "./Ref";
import Ref2 from "./Ref2";
import State from "./State";
import { ThemeContext } from "./ThemeContext";

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
        </div>
    )
}
