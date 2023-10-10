import Transferdata from "./components/Transferdata";
import Course from "./components/course/Course";
import Login from "./components/login/Login";
import './components/transferdata.css'
import './components/course/c.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import './components/home/home.css'
import Book from "./components/experiment/Book";
import Bookview from "./components/experiment/Bookview";

function App() {
  return (
    <div>
      
     <BrowserRouter> 
      <Routes>
        <Route path={'/'} element={<Login/>}></Route>
        <Route path={'/course'} element={<Course/>}></Route>
        <Route path={'/Home'} element={<Home/>}></Route>
        <Route path={'/book'} element={<Book/>}></Route>
        <Route path={'/bookview'} element={<Bookview/>}></Route>
      </Routes>
      </BrowserRouter> 
      {/* <Course/> */}
      {/* <Login/> */}
      {/* <Transferdata usertype="Admin" username="rithin" password="1234556"/> */}
    </div>
  );
}

export default App;
