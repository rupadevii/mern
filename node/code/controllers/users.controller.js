let users = [
    {
        id: 1,
        name: "Rupa",
        age: 21
    },
    {
        id: 2,
        name: "Aastha Yadav",
        age: 15
    }
]

export const getUsers = (req, res) => {
    return res.status(200).json({data: users})
}

export const addUser = (req, res) => {
    const {name, age} = req.body

    if(!name || !age){
        return res.status(400).json({msg: "Please provide required details."})
    }

    const user = {
        id: new Date().getTime(),
        name,
        age
    }

    users.push(user)
    console.log(users)
    res.status(201).json({msg: "User added successfully.", user})
}

export const deleteUser = (req, res) => {
    let {id} = req.params
    
    const user = users.find(user => user.id === Number(id))

    if(!user){
        return res.status(404).json({msg: "User not found."})
    }

    users = users.filter(user => user.id !== Number(id))

    res.status(200).json({msg: "User deleted successfully."})
}

export const updateUser = (req, res) => {
    const {id} = req.params

    const {age} = req.body 

    const user = users.find(user => user.id === Number(id))

    if(!user){
        return res.status(404).json({msg: "User not found."})
    }

    user.age = age

    res.status(200).json({msg: "User updated successfully", user})
}