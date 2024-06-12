import React, { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/signup"; // Import the SignUp component
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Navbar from "./components/navbar/Navbar";
import Edit from "./pages/edit/Edit";
import MakeAppointment from './pages/appointment/MakeAppointment';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [email, setEmail] = useState("");

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Navbar email={email} />
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/make-appointment" element={<MakeAppointment />} />
            <Route path="new" element={<New />}>
            </Route>
            
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
