let orders = [
    {
        id: 1,
        customerId: 5,
        products: [
            {
                id: 101,
                name: "Product 1",
                price: 500,
                quantity: 1
            },
            {
                id: 102,
                name: "Product 2",
                price: 4500,
                quantity: 1
            }
        ],
        address: {
            street: 'XYZ road',
            city: 'ABC city',
            state: 'Telangana',
            pincode: '501501'
        },
        pricing: {
            subtotal: 5000,
            shippingCost: 55,
            discount: 50,
            total: 4075
        },
        paymentStatus: 'pending',
        modeOfPayment: 'UPI',
        orderStatus: 'pending'
    }
]

// {
//       "id": 2,
//       "customerId": 6,
//       "products": [
//         {
//           "id": 101,
//           "name": "Product 1",
//           "price": 500,
//           "quantity": 1
//         },
//         {
//           "id": 102,
//           "name": "Product 2",
//           "price": 4500,
//           "quantity": 1
//         }
//       ],
//       "address": {
//         "street": "XYZ road",
//         "city": "ABC city",
//         "state": "Telangana",
//         "pincode": "501501"
//       },
//       "pricing": {
//         "subtotal": 5000,
//         "shippingCost": 55,
//         "discount": 50,
//         "tax": 25,
//         "total": 4075
//       },
//       "paymentStatus": "pending",
//       "modeOfPayment": "UPI",
//       "orderStatus": "pending"
//     }

export const getOrders = (req, res) => {
    res.status(200).json({msg: "Orders", data: orders})
}

export const getOrderById = (req, res) => {
    const {id} = req.params

    const order = orders.find(item => item.id===Number(id))

    if(!order){
        return res.status(404).json({msg: "Order not found."})
    }

    return res.status(200).json({msg: "Order details", data: order})
}

export const addOrder = (req, res) => {
    const {customerId, products, address, pricing, paymentStatus, modeOfPayment, orderStatus } = req.body

    if(!customerId || !Array.isArray(products) || products.length===0 || !address || !pricing || !modeOfPayment){
        return res.status(400).json({msg: "Provide required details"})
    }

    const newOrder = {
        id: Date.now(),
        customerId,
        pricing,
        products,
        address,
        paymentStatus: paymentStatus||'pending',
        modeOfPayment,
        orderStatus: orderStatus||'pending'
    }

    orders.push(newOrder)

    res.status(201).json({msg: "New Order created successfully", data: newOrder})
}

export const updateOrder = (req, res) => {
    const {id} = req.params

    const order = orders.find(item => item.id===Number(id))

    if(!order){
        return res.status(404).json({msg: "Order not found"})
    }

    const newOrder = {
        ...order,
        ...req.body
    }

    orders = orders.map(item => item.id===Number(id) ? newOrder: item)

    res.status(200).json({msg: "Order updated successfully", data: newOrder})
}

export const deleteOrder = (req, res) => {
    const {id} = req.params

    const order = orders.find(item => item.id === Number(id))

    if(!order){
        return res.status(404).json({msg: "Order not found."})
    }

    orders = orders.filter(item => item.id !== Number(id))

    res.status(200).json({msg: "Order deleted successfully", data: order})
}