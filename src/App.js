import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import DashBoard from "./Components/Pages/DashBoard";
import { useSelector } from "react-redux";
// import AllTask from "./Components/TaskManager/AllTask";
// import NewTask from "./Components/TaskManager/NewTask";
// import CreateTask from "./Components/TaskManager/CreateTask";
// import ProgressTask from "./Components/TaskManager/ProgressTask";
// import CompletedTask from "./Components/TaskManager/CompletedTask";
// import CencelTask from "./Components/TaskManager/CencelTask";


function App() {

  const {token }=useSelector(state=>state.auth);
  console.log(token)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/dashboard" element={<DashBoard />}>
          {/* <Route index element={<AllTask />} />
          <Route path="/all" element={<NewTask />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/progress" element={<ProgressTask />} />
          <Route path="/completed" element={<CompletedTask />} />
          <Route path="/canceled" element={<CencelTask />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
