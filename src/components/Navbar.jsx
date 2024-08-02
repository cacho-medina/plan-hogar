import { Link } from "react-router-dom";
function Navbar() {
    return (
        <header>
            <div className="bg-gris py-5 md:px-8 flex items-center justify-between">
                <div className="px-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 transition hover:scale-110"
                    >
                        <img
                            src="/logo.svg"
                            alt="logo plan hogar"
                            className="w-8"
                        />
                        <h2 className="text-2xl text-center md:text-start font-bold text-slate-700">
                            Plan Hogar
                        </h2>
                    </Link>
                </div>
                <input
                    type="checkbox"
                    id="sidebar-active"
                    className="hidden peer"
                />
                <div className="flex justify-end px-4 py-2 md:hidden">
                    <label
                        htmlFor="sidebar-active"
                        className="inline-block burger md:hidden"
                    >
                        <img src="/menu.svg" alt="" className="w-10" />
                    </label>
                </div>
                <nav className="peer-checked:right-0 transition-all duration-300 ease-out fixed top-0 bottom-0 -right-full z-50 w-2/3 sm:w-1/2 bg-gris py-6 pl-4 md:hidden shadow-2xl">
                    <label htmlFor="sidebar-active" className="md:hidden">
                        <img src="/close.svg" alt="" className="w-8" />
                    </label>
                    <ul className="flex flex-col items-start justify-center gap-8 text-gris-oscuro font-semibold py-10 text-xl h-full">
                        <li className="px-4 py-2">
                            <Link
                                to="/clientes"
                                className="flex items-center gap-2"
                            >
                                <img
                                    src="/utils/cliente.svg"
                                    alt="logo cliente"
                                    className="w-6 sm:w-8"
                                />
                                <h4 className="text-gris-oscuro text-2xl sm:text-3xl">
                                    Clientes
                                </h4>
                            </Link>
                        </li>
                        <li className="px-4 py-2">
                            <Link
                                to="/planes"
                                className="flex items-center gap-2"
                            >
                                <img
                                    src="/utils/planes.svg"
                                    alt="logo planes"
                                    className="w-6 sm:w-8"
                                />
                                <h4 className="text-gris-oscuro text-2xl sm:text-3xl">
                                    Planes
                                </h4>
                            </Link>
                        </li>
                        <li className="px-4 py-2">
                            <Link
                                to="/productos"
                                className="flex items-center gap-2"
                            >
                                <img
                                    src="/utils/productos.svg"
                                    alt="logo productos"
                                    className="w-6 sm:w-8"
                                />
                                <h4 className="text-gris-oscuro text-2xl sm:text-3xl">
                                    Productos
                                </h4>
                            </Link>
                        </li>
                        <li className="px-6 mt-auto">
                            <button className="text-white p-2 px-8 w-full rounded-xl font-bold  bg-red-600">
                                <div className="flex items-center gap-2 justify-center">
                                    <img
                                        src="/salir.svg"
                                        alt="logout"
                                        className="w-6"
                                    />
                                    <h4 className="text-xl">Salir</h4>
                                </div>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
