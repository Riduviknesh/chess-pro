import react from 'react';
import './App.css';
import { Signup } from './components/Signup.jsx';
import { Login } from './components/Login.jsx';
import { Course } from './components/admin/Course.jsx';
import {AdminPage} from './components/admin/Academy/AdminPage.jsx'
import {Student} from './components/admin/Student.jsx'
import { AddEditAcademy} from './components/admin/Academy/AddEditAcademy';
import history from './history'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/admin-profile" exact element={<AdminPage />} />
        <Route path="/course" exact element={<Course />} />
        <Route path="/student" exact element={<Student />} />
        <Route path="/academy" exact element={<AddEditAcademy/>} />
      </Routes>  
    </BrowserRouter>
    // <div>
    //   <AdminPage/>
    // </div>

  );
}

export default App;

