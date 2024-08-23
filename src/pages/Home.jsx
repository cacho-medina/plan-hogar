import { Link } from "react-router-dom";
import FormCliente from "../components/Formularios/FormCliente";
import { useDisclosure } from "@nextui-org/react";
import TablaClientes from "../components/ui/TablaClientes";
import TablaPagos from "../components/ui/TablaPagos";
import { useEffect } from "react";
import useStore from "../store/useStore";

const columns = [
    {
        key: "nombre",
        label: "Cliente",
    },
    {
        key: "documento",
        label: "Documento",
    },
    {
        key: "actions",
        label: "Ver detalle",
    },
];

function Home() {
    const { onOpen, onClose, isOpen, onOpenChange } = useDisclosure();
    const {
        clientes,
        obtenerClientes,
        obtenerPagos,
        pagos,
        obtenerPlanes,
        obtenerInventario,
    } = useStore();
    useEffect(() => {
        obtenerClientes();
        obtenerInventario();
        obtenerPagos();
        obtenerPlanes();
    }, []);
    return (
        <>
            <FormCliente
                isOpen={isOpen}
                onClose={onClose}
                onOpenChange={onOpenChange}
            />
            <div className="content">
                <div className="bg-blue-500 py-10 md:rounded-tl-2xl">
                    <h2 className="text-6xl font-bold text-white text-center">
                        Clientes
                    </h2>
                </div>
                <div className="px-3 py-8 sm:px-5">
                    <div className="flex flex-col justify-center gap-3 md:flex-row md:gap-5">
                        <button
                            onClick={onOpen}
                            className="btn-blue text-2xl text-center"
                        >
                            Registrar Cliente
                        </button>
                        <Link
                            to="/pago/registrar"
                            className="btn-secondary text-2xl text-center"
                        >
                            Registrar Pago
                        </Link>
                    </div>
                </div>
                <hr />
                <div className="grow px-2 md:px-6">
                    <div className="max-w-[700px] lg:mx-auto my-6">
                        <h2 className="text-4xl md:text-5xl text-gris-oscuro font-semibold text-center mb-6">
                            Lista de Pagos
                        </h2>
                        <TablaPagos pagos={pagos} />
                    </div>
                    <div className="max-w-[700px] lg:mx-auto my-6">
                        <h2 className="text-4xl md:text-5xl text-gris-oscuro font-semibold text-center mb-6">
                            Lista de clientes
                        </h2>
                        <TablaClientes columns={columns} users={clientes} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
