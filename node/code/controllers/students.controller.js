let students = [
    {
        id: 1,
        name: "Rupa Devi",
        email: "rupadevi7094@gmail.com",
        personalDetails: {
            phoneNumber: 8074765598,
            dob: "07-09-2004",
            address: "Hyderabad, Telangana"
        },
        course: "MERN Full Stack",
        batch: {
            id: 101,
            name: "OBH 6 MERN"
        },
        joined: "Aug 2025",
        mockStatus: {
            frontend: "cleared",
            fullStack: "attempted"
        }
    }
]

const batches = [
    { id: 101, name: "OBH 3 MERN"},
    { id: 102, name: "OBH 4 MERN"},
    { id: 103, name: "OBH 5 MERN"},
    { id: 104, name: "OBH 6 MERN"},
    { id: 105, name: "OBN 7 MERN"},
]

export const getStudents = (req, res) => {
    return res.status(200).json({msg: "Students", data: students})
}

export const getStudentDetails = (req, res) => {
    const {id} = req.params

    const student = students.find(item => item.id===Number(id))

    if(!student){
        return res.status(404).json({msg: "Student not found!"})
    }

    return res.status(200).json({msg: "Student details", data: student})
}

export const updateStudent = (req, res) => {
    const {id} = req.params

    let student = students.find(item => item.id === Number(id))

    if(!student){
        return res.status(400).json({msg: "Student not found"})
    }

    const updatedStudent = {
        ...student,
        personalDetails:{
            ...student.personalDetails,
            ...req.body.personalDetails
        },
        mockStatus: {
            ...student.mockStatus,
            ...req.body.mockStatus
        }
    }

    const updatedStudents = students.map(item => item.id===Number(id)? updatedStudent: item)

    students = updatedStudents

    return res.status(200).json({msg: "User updated successfully."})
    
}

export const addStudent = (req, res) => {
    const {name, email, phoneNumber, dob, address, course, batchId, joined, fullStackMockStatus, frontEndMockStatus} = req.body;

    if(!name || !email || !batchId || !course || !joined){
        return res.status(400).json({msg: "Provide all details"})
    }

    const batch = batches.find(item => item.id===Number(batchId))

    if(!batch){
        return res.status(404).json({msg: "Invalid batch"})
    }

    const newStudent = {
        id: Date.now(),
        name,
        email,
        personalDetails: {
            phoneNumber, dob, address
        },
        course,
        batch,
        joined,
        mockStatus: {
            fullStack: fullStackMockStatus|| "unattempted",
            frontEnd: frontEndMockStatus|| "unattempted"
        }
    }

    students.push(newStudent)

    res.status(201).json({msg: "Student added successfully"})
}  

export const deleteStudent = (req, res) => {
    const {id} = req.params

    const student = students.find(item => item.id===Number(id))

    if(!student){
        return res.status(404).json({msg: "Student not found."})
    }

    students = students.filter(item => item.id !== Number(id))

    res.status(200).json({msg: "Student deleted successfully"})
}