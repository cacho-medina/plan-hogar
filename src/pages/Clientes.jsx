import Form from "../components/FormClientes/Form";
import { useDisclosure } from "@nextui-org/react";
import TablaClientes from "../components/ui/TablaClientes";

const columns = [
    {
        key: "nombre",
        label: "Nombre",
    },
    {
        key: "dni",
        label: "Dni",
    },
    {
        key: "actions",
        label: "Ver detalle",
    },
];
const rows = [
    {
        key: "1",
        nombre: "Tony Reichert",
        dni: "42718264",
        plan: "plan 1",
        estado: "Activo",
    },
    {
        key: "2",
        nombre: "Julieta Medina",
        dni: "22692060",
        plan: "plan 6",
        estado: "Activo",
    },
    {
        key: "3",
        nombre: "Leo Messi",
        dni: "42718264",
        plan: "plan 1",
        estado: "Inactivo",
    },
    {
        key: "4",
        nombre: "Joaquin Medina",
        dni: "42718264",
        plan: "plan 2",
        estado: "Activo",
    },
    {
        key: "7",
        nombre: "Tony Reichert",
        dni: "42718264",
        plan: "plan 1",
        estado: "Activo",
    },
    {
        key: "20",
        nombre: "Cande",
        dni: "22692060",
        plan: "plan 6",
        estado: "Activo",
    },
    {
        key: "30",
        nombre: "CR7",
        dni: "42718264",
        plan: "plan 1",
        estado: "Inactivo",
    },
    {
        key: "40",
        nombre: "Joaquin Mesina",
        dni: "42718264",
        plan: "plan 2",
        estado: "Activo",
    },
];

function Clientes() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
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
                    <Form isOpen={isOpen} onOpenChange={onOpenChange} />
                </div>
                <div className="max-w-[1050px] lg:mx-auto my-6">
                    <TablaClientes columns={columns} users={rows} />
                </div>
            </div>
        </div>
    );
}

export default Clientes;
