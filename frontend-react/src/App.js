import './App.css';
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import AddStudent from "./components/AddStudent";
import {ToastContainer} from "react-toastify";
import StudentList from "./components/StudentList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route index element={<StudentList />} />
              <Route path='/' element={<StudentList />} />
              <Route path='/studentList' element={<StudentList />} />
              <Route path='/addStudent' element={<AddStudent />} />
              <Route path='/updateStudent/:id' element={<UpdateStudent />} />
          </Routes>
          <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
