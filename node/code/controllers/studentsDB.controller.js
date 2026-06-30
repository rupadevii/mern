import Batch from "../models/batch.model.js";
import Student from "../models/student.model.js";

// {
//     "name": "Prachi Nigam",
//     "email": "prachinigam@gmail.com",
//     "personalDetails": {
//         "phoneNumber" : 9876543210,
//         "dob" : "05-10-2004",
//         "address" : "Greater Noida"
//         },
//         "course" : "Java full stack",
//         "joined" : "July 2025",
//         "mockStatus" : {
//           "fullStackMockStatus": "cleared",
//           "frontEndMockStatus": "cleared"
//         },
//         "batchId" : "6a42a9ed576c0fb23e8b40f4"
  
// }

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find({}).populate("batch", "name")

        if(students.length===0){
            return res.status(404).json({msg: "No students found."})
        }

        return res.status(200).json({msg: "Students", data: students})

    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const getStudentDetails = async (req, res) => {
    try {
        const {id} = req.params

        const student = await Student.findById(id).populate("batch", "name")

        if(!student){
            return res.status(404).json({msg: "Student not found."})
        }

        return res.status(200).json({msg: "Student details", data: student})

    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const updateStudent = async (req, res) => {
    try {
        const {id} = req.params

        const updates = req.body
        
        const updatedStudent = await Student.findByIdAndUpdate(id, updates, {new: true, runValidators: true})

        if(!updatedStudent){
            return res.status(404).json({msg: "No student found"})
        }

        res.status(200).json({msg: "Student updated successfully", data: updatedStudent})

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message})
    }
}

export const addStudent = async (req, res) => {
    try {
        const {name, email, phoneNumber, dob, address, course, batchId, joined, fullStackMockStatus, frontEndMockStatus} = req.body;

        if(!name || !email || !batchId || !course || !joined){
            return res.status(400).json({msg: "Provide all details"})
        }

        const existingStudent = await Student.find({email: email})

        if(existingStudent){
            return res.status(400).json({msg: "Student already exists."})
        }

        const batch = await Batch.findById(batchId)

        if(!batch){
            return res.status(404).json({msg: "Invalid batch"})
        }

        const newStudent = {
            name,
            email,
            personalDetails: {
                phoneNumber, dob, address
            },
            course,
            batch: batchId,
            joined,
            mockStatus: {
                fullStack: fullStackMockStatus||"unattempted",
                frontEnd: frontEndMockStatus||"unattempted"
            }
        }

        const student = await Student.create(newStudent)

        res.status(201).json({msg: "Student added successfully.", data: student})

    } catch (error) {
        console.log(error)

        res.status(500).json({msg: error.message})

    }
}

export const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params

        const student = await Student.findByIdAndDelete(id)

        if(!student){
            return res.status(404).json({msg: "Student not found"})
        }

        res.status(200).json({msg: "Student deleted successfully."})

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message})
    }
}