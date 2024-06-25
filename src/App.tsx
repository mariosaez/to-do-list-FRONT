import { Routes, Route } from "react-router-dom";
import { Register } from "./views/RegisterView";
import { EditProfileView } from "./views/EditProfileView";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";
import ProfileView from "./views/ProfileView";

function App() {
  return (
    <>
     <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/" element={<LoginView />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/editProfile" element={<EditProfileView />} />
     </Routes>
    </>
  );
}

export default App;
