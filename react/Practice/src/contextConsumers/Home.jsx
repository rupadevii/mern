import { Link } from "react-router-dom";
import { HomeContext } from "../context/HomeContext";
import { useContext } from "react";

export default function Home() {
    const { userInfo } = useContext(HomeContext);

    return (
        <div>
        <h1>Home</h1>
        <div>
            <h2>{userInfo.name}</h2>
            <p>{userInfo.age}</p>
        </div>
        <Link to="/products">Products</Link>
        </div>
    );
}
