import StudentService from "../services/StudentService";
import {toast} from "react-toastify";
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

const AddStudent = () => {
    const [student, setStudent] = useState({
        id: "",
        name: "",
        email: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const value = e.target.value
        setStudent({ ...student, [e.target.name]: value })
    }

    const saveStudent = (e) => {
        e.preventDefault()
        StudentService.saveStudent(student).then((response) => {
            toast.success('Student Created Successfully')
            navigate('/studentList')
        }).catch((error) => {
            toast.error(error.message)
        })
    }

    const reset = (e) => {
        e.preventDefault()
        setStudent({
            id: "",
            name: "",
            email: "",
        })
    }

    return (
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Add New Student</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Full Name
                    </label>
                    <input type="text" name="name" onChange={(e) => handleChange(e)}
                           value={student.name} className="h-10 w-96 border mt-2 px-2 py-2"/>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600 text-sm font-normal">
                        Email Address
                    </label>
                    <input type="email" name="email" onChange={(e) => handleChange(e)}
                           value={student.email} className="h-10 w-96 border mt-2 px-2 py-2"/>
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button onClick={saveStudent} className="rounded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-6">
                        Save
                    </button>
                    <button onClick={reset} className="rounded text-white font-semibold bg-red-400 hover:bg-red-800 py-2 px-6">
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddStudent