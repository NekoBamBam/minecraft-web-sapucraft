import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./firebase/config.js";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Layout from "./layouts/Layout";
import Memories from "./pages/Memories.Jsx";
import Events from "./pages/Events.jsx";
import Prueba from "./pages/Prueba.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/events" element={<Events />} />
          <Route path="/prueba" element={<Prueba />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
