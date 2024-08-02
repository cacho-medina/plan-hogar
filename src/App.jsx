import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Productos from "./pages/Productos";
import Clientes from "./pages/Clientes";
import Login from "./pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
    const { pathname } = useLocation();
    return (
        <>
            {/* {pathname !== "/login" && <Navbar />} */}
            <Navbar />
            <main className="grow bg-gris flex">
                {pathname !== "/login" && <Aside />}
                <div className="grow">
                    <Routes>
                        <Route exac path="/login" element={<Login />} />
                        <Route exac path="/" element={<Home />} />
                        <Route exac path="/planes" element={<Planes />} />
                        <Route exac path="/productos" element={<Productos />} />
                        <Route exac path="/clientes" element={<Clientes />} />
                    </Routes>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
