
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ToDoListThings from "./pages/ToDoListThings"
import Login from"./pages/Login"



function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/toDoListThings" element={<ToDoListThings/>}>
        </Routes>
    </BrowserRouter>
  )
}

export default App
