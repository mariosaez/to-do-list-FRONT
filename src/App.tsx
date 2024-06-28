import { Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeView";
import { LoginView } from "./views/LoginView";
import { RegisterView } from "./views/RegisterView";
import { ProfileView } from "./views/ProfileView";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </DndProvider>
  );
}

export default App;
