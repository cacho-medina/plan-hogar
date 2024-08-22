import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import Planes from "./pages/Planes";
import Productos from "./pages/Productos";
import Login from "./pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { useState } from "react";
import ClienteDetail from "./pages/Clientes/ClienteDetail";
import PlanDetail from "./pages/Planes/PlanDetail";
import Registro from "./pages/Pagos/Registro";

function App() {
    const { pathname } = useLocation();
    const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};
    const [loggedUser, setUserLogged] = useState(usuario);

    return (
        <>
            {/* {pathname !== "/login" && <Navbar />} */}
            <Navbar setUserLogged={setUserLogged} />
            <main className="grow bg-gris flex">
                {pathname !== "/login" && (
                    <Aside setUserLogged={setUserLogged} />
                )}
                <div className="grow">
                    <Routes>
                        <Route
                            exac
                            path="/login"
                            element={<Login setUserLogged={setUserLogged} />}
                        />
                        <Route
                            exac
                            path="/"
                            element={
                                <ProtectedRoutes>
                                    <Home />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            exac
                            path="/planes"
                            element={
                                <ProtectedRoutes>
                                    <Planes />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            exac
                            path="/plan/:id"
                            element={
                                <ProtectedRoutes>
                                    <PlanDetail />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            exac
                            path="/productos"
                            element={
                                <ProtectedRoutes>
                                    <Productos />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            exac
                            path="/clientes/:id"
                            element={
                                <ProtectedRoutes>
                                    <ClienteDetail />
                                </ProtectedRoutes>
                            }
                        />
                        <Route
                            exac
                            path="/pago/registrar"
                            element={
                                <ProtectedRoutes>
                                    <Registro />
                                </ProtectedRoutes>
                            }
                        />
                    </Routes>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;
