import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Products() {
    const { products } = useContext(ProductsContext);
    console.log(products);
    // const []
    return (
        <div>
        <Link to="/orders">Orders</Link>
        <h1>Products</h1>
        <div>
            {products && products.map((product) => <div>{product.title}</div>)}
        </div>
        </div>
    );
}
