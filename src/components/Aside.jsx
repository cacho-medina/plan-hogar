import { NavLink } from "react-router-dom";
import { logout } from "../helpers/logout";

function Aside({ setUserLogged }) {
    return (
        <aside className="hidden md:flex md:w-60 bg-gris flex-col items-stretch justify-between">
            <ul className="p-2 md:mt-8 md:py-4 md:px-6 flex flex-col items-stretch justify-center gap-4 md:gap-8 md:text-xl">
                <li>
                    <NavLink to="/" className="navlink">
                        <img
                            src="/utils/cliente.svg"
                            alt="logo cliente"
                            className="w-6"
                        />
                        <h4 className="sm:text-xl text-gris-oscuro font-semibold">
                            Clientes
                        </h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/planes" className="navlink">
                        <img
                            src="/utils/planes.svg"
                            alt="logo planes"
                            className="w-6"
                        />
                        <h4 className="text-xl text-gris-oscuro font-semibold">
                            Planes
                        </h4>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/productos" className="navlink">
                        <img
                            src="/utils/productos.svg"
                            alt="logo productos"
                            className="w-6"
                        />
                        <h4 className="text-xl text-gris-oscuro font-semibold">
                            Productos
                        </h4>
                    </NavLink>
                </li>
            </ul>
            <div className="px-6">
                <button
                    className="btn-red"
                    onClick={() => logout(setUserLogged)}
                >
                    <div className="flex items-center gap-2 justify-center">
                        <img src="/salir.svg" alt="logout" className="w-6" />
                        <h4 className="text-xl">Salir</h4>
                    </div>
                </button>
            </div>
        </aside>
    );
}

export default Aside;
