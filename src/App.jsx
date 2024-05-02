import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorList from "./components/DoctorList";
import AddDoctor from "./components/AddDoctor";
import UpdateDoctor from "./components/UpdateDoctor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorList />}></Route>
        <Route path="/add" element={<AddDoctor />}></Route>
        <Route path="/update/:id" element={<UpdateDoctor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
