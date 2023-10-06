import Transferdata from "./components/Transferdata";
import Course from "./components/course/Course";
import Login from "./components/login/Login";
import './components/transferdata.css'
import './components/course/c.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Login/>}></Route>
        <Route path={'/Home'} element={<Course/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Course/> */}
      {/* <Login/> */}
      {/* <Transferdata usertype="Admin" username="rithin" password="1234556"/> */}
    </div>
  );
}

export default App;
