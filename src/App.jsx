import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Layout from "./layouts/Layout";
import Memories from "./pages/Memories.Jsx";
import "./firebase/config.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/memories" element={<Memories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
