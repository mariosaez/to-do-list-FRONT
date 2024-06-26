import { Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";
import { RegisterView } from "./views/RegisterView";
import { ProfileView } from "./views/ProfileView";

function App() {
  return (
    <>
     <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/profile" element={<ProfileView />} />
     </Routes>
    </>
  );
}

export default App;
