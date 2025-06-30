import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shorts from "./pages/Shorts.jsx";
import Music from "./pages/Music.jsx";
import Banana2D from "./pages/Banana2D.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shorts" element={<Shorts />} />
                <Route path="/short" element={<Shorts />} />
                <Route path="/musicvideo" element={<Music />} />
                <Route path="/change" element={<Banana2D />} />
            </Routes>

        </>
    )
}

export default App
