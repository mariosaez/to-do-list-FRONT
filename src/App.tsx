import React from "react";
import { Routes, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import Home from "./pages/Home";
import { Login } from "./viewModels/Login";
import Profile from "./pages/Profile";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
     <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editProfile" element={<EditProfile />} />
     </Routes>
    </>
  );
}

export default App;
