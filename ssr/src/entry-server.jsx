import { renderToString } from "react-dom/server";
import App from "./App";

//return html string that is to be injected on the page in server
export function render(){
    return renderToString(<App/>)
}