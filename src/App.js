import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Collections from "./components/Collections";
import Contact from "./components/Contact";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home />}></Route>
                    <Route path={"/collections"} element={<Collections />}></Route>
                    <Route path={"/contact"} element={<Contact />}></Route>
                    <Route path={"/about"} element={<About />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
