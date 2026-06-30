let employees = [{
    id: 1,
    name: "Yuvika Agnihotri",
    email: "yuvika22@gmail.com",
    phone: 987654321,
    department: "Information Technology",
    designation: "Full stack Developer",
    salary: 150000,
    joiningDate: "July 2026",
    address: {
        city: "Noida",
        state: "Uttar Pradesh"
    },
    status: "active"
}]

export const getEmployees = (req, res) => {
    if(employees.length===0){
        return res.status(404).json({msg: "No employees found"})
    }

    res.status(200).json({msg: "Employees", data: employees})
}

export const getEmployeeById = (req, res) => {
    const {id} = req.params

    const employee = employees.find(item => item.id===Number(id))

    if(!employee){
        return res.status(404).json({msg: "No employee found."})
    }

    res.status(200).json({msg: "Employee Details", data: employee})
}

export const addEmployee = (req, res) => {
    const {name, email, phone, department, designation, salary, joiningDate, address, status} = req.body

    if(!name || !email || !department || !designation || !salary || !joiningDate){
        return res.status(400).json({msg: "Provide required details."})
    }

    const newEmployee = {
        id: Date.now(),
        name,
        email,
        phone,
        department,
        designation,
        salary,
        joiningDate,
        address,
        status: status || 'inactive'
    }

    employees.push(newEmployee)

    res.status(201).json({msg: "New employee added successfully", data: newEmployee})
}

export const updateEmployee = (req, res) => {
    const {id} = req.params

    const employee = employees.find(item => item.id===Number(id))

    if(!employee){
        return res.status(404).json({msg: "No employee found."})
    }

    const updatedEmployee = {
        ...employee,
        ...req.body
    }

    employees = employees.map(item => item.id===Number(id) ? updatedEmployee: item)

    res.status(200).json({msg: "Employee updated successfully.", data: updatedEmployee})
}

export const deleteEmployee = (req, res) => {
    const {id} = req.params

    const employee = employees.find(item => item.id===Number(id))

    if(!employee){
        return res.status(404).json({msg: "No employee found."})
    }

    employees = employees.filter(item => item.id !== Number(id))
    
    res.status(200).json({msg: "Employee deleted successfully."})
}