import React from "react";
import { Routes, Route } from "react-router-dom";
import EditProfile from "./views/EditProfileView";
import Home from "./viewModels/HomeViewModel";
import { Login } from "./viewModels/LoginViewModel";
import Profile from "./views/ProfileView";
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
