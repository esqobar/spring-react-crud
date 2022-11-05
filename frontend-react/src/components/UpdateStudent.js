import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {toast} from "react-toastify";
import StudentService from "../services/StudentService";

const UpdateStudent = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [student, setStudent] = useState({
        id: id,
        name: "",
        email: "",
    })

    const handleChange = (e) => {
        const value = e.target.value
        setStudent({ ...student, [e.target.name]: value })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await StudentService.getStudent(student.id)
                setStudent(response.data)
            } catch (error){
                toast.error(error.message)
            }
        };
        fetchData();
    }, [])

    const updateStudent = (e) => {
        e.preventDefault()
        StudentService.updateStudent(student, id)
            .then((response) => {
                navigate("/studentList")
                toast.success("Student updated successfully")
            }).catch((error) => {
                toast.error(error.message)
        })
    }

    return(
        <div className="flex max-w-2xl mx-auto shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">
                    <h1>Update Student</h1>
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
                    <button onClick={updateStudent} className="rounded text-white font-semibold bg-green-400 hover:bg-green-800 py-2 px-6">
                        Save
                    </button>
                    <button onClick={() => navigate("/studentList")} className="rounded text-white font-semibold bg-red-400 hover:bg-red-800 py-2 px-6">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UpdateStudent