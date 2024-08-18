import FormCliente from "../components/Formularios/FormCliente";
import { useDisclosure } from "@nextui-org/react";
import TablaClientes from "../components/ui/TablaClientes";
import useStore from "../store/useStore";
import { useEffect } from "react";

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

function Clientes() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { clientes, obtenerClientes } = useStore();
    useEffect(() => {
        obtenerClientes();
    }, []);
    return (
        <div className="content">
            <div className="bg-blue-500 py-10 md:rounded-tl-2xl">
                <h2 className="text-6xl font-bold text-white text-center">
                    Clientes
                </h2>
            </div>
            <div className="grow px-2 md:px-6">
                <div className="flex items-center justify-center border-b py-8">
                    <button onClick={onOpen} className="btn-blue text-2xl">
                        Registrar Cliente
                    </button>
                    <FormCliente
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        onClose={onClose}
                    />
                </div>
                <div className="max-w-[700px] lg:mx-auto my-6">
                    <TablaClientes columns={columns} users={clientes} />
                </div>
            </div>
        </div>
    );
}

export default Clientes;
