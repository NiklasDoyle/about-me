import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import Links from "./pages/Links/Links";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div>
                    <Routes>
                        <Route path='/about-me' element={<Homepage />} />
                        <Route path='/experience' element={<Experience />} />
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/links' element={<Links />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>);
}

export default App;