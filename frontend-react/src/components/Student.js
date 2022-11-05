import {useNavigate, Link} from "react-router-dom";

const Student = ({ student, deleteStudent }) => {

    const navigate = useNavigate()

    const updateStudent = (e, id) => {
        e.preventDefault()
        navigate(`/updateStudent/${id}`)
    }
    return (
        <tr key={student.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{student.name}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{student.email}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <Link onClick={(e, id) => updateStudent(e, student.id)} className="text-indigo-600 hover:text-indigo-800 px-4">Edit</Link>
                <Link onClick={(e, id) => deleteStudent(e, student.id)}
                   className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">Delete</Link>
            </td>
        </tr>
    )
}

export default Student