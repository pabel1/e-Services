import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
// import DashBoard from "./Components/Pages/DashBoard";
import { useSelector } from "react-redux";
// import DashSidebar from "./Components/Dashboard/DashboardSidebar/DashSidebar";
import AllTask from "./Components/TaskManager/AllTask";
import NewTask from "./Components/TaskManager/NewTask";
import CreateTask from "./Components/TaskManager/CreateTask";
import ProgressTask from "./Components/TaskManager/ProgressTask";
import CompletedTask from "./Components/TaskManager/CompletedTask";
import CencelTask from "./Components/TaskManager/CencelTask";
import DashLayout from "./Components/Dashboard/DashLayout";
import UpdateProfile from "./Components/updateProfile/UpdateProfile";
import SendOtp from "./Components/OTPVerification.js/SendOtp";
import OTPInput from "./Components/OTPVerification.js/OTPInput";
import RecoverPassword from "./Components/OTPVerification.js/RecoverPassword";


function App() {

  const {token }=useSelector(state=>state.auth);
  console.log(token)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/forgetpassword" element={ <SendOtp />} />
        <Route path="/otpverification" element={ <OTPInput />} />
        <Route path="/recoverpassword" element={ <RecoverPassword />} />
        <Route path="/dashboard/" element={ <DashLayout />}>
          <Route index element={<AllTask />} />
          <Route path="all" element={<NewTask />} />
          <Route path="create" element={<CreateTask />} />
          <Route path="progress" element={<ProgressTask />} />
          <Route path="completed" element={<CompletedTask />} />
          <Route path="canceled" element={<CencelTask />} />
          <Route path="updateprofile" element={<UpdateProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
