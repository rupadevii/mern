import { OrdersContext } from "../context/OrdersContext";
import { useContext} from "react";

export default function Orders() {
    const { orders } = useContext(OrdersContext);
    // const []]
    console.log("orders", orders);

    return (
        <div>
        <h1>Orders</h1>
        <div>
            {orders && orders.slice(0, 10).map((order) => <div>{order.title}</div>)}
        </div>
        </div>
    );
}
