import { Link } from "react-router-dom";
function Aside() {
    return (
        <aside className="hidden md:flex md:w-60 bg-gris flex-col items-stretch justify-between">
            <ul className="p-2 md:mt-8 md:py-4 md:px-6 flex flex-col items-stretch justify-center gap-4 md:gap-8 md:text-xl">
                <li className="bg-white p-2 md:px-4 rounded-xl text-white transition-colors hover:text-gris-oscuro hover:outline outline-2 cursor-pointer">
                    <Link to="/clientes" className="flex items-center gap-2">
                        <img
                            src="/utils/cliente.svg"
                            alt="logo cliente"
                            className="w-6"
                        />
                        <h4 className="sm:text-xl text-gris-oscuro font-semibold">
                            Clientes
                        </h4>
                    </Link>
                </li>
                <li className="bg-white p-2 md:px-4 rounded-xl text-white transition-colors hover:text-gris-oscuro hover:outline outline-2 cursor-pointer">
                    <Link to="/planes" className="flex items-center gap-2">
                        <img
                            src="/utils/cliente.svg"
                            alt="logo cliente"
                            className="w-6"
                        />
                        <h4 className="text-xl text-gris-oscuro font-semibold">
                            Planes
                        </h4>
                    </Link>
                </li>
                <li className="bg-white p-2 md:px-4 rounded-xl text-white transition-colors hover:text-gris-oscuro hover:outline outline-2 cursor-pointer">
                    <Link to="/productos" className="flex items-center gap-2">
                        <img
                            src="/utils/cliente.svg"
                            alt="logo cliente"
                            className="w-6"
                        />
                        <h4 className="text-xl text-gris-oscuro font-semibold">
                            Productos
                        </h4>
                    </Link>
                </li>
            </ul>
            <div className="px-6">
                <button className="btn-red">
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
