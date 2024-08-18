import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClienteById } from "../../store/actions/actions";
import { Chip } from "@nextui-org/react";

const statusColorMap = {
    true: "success",
    false: "danger",
};

function ClienteDetail() {
    const { id } = useParams();
    const [cliente, setCliente] = useState({});
    const handleCliente = async () => {
        const client = await getClienteById(id);
        setCliente(client);
    };
    useEffect(() => {
        handleCliente();
    }, []);
    return (
        <div className="content grow">
            <div className="bg-gris/50 py-10 md:rounded-tl-2xl md:rounded-br-2xl">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-500 text-center">
                    {cliente.cliente?.nombre}
                </h2>
            </div>
            <div className="grow px-2 md:px-6">
                <div className="flex flex-col items-center justify-center gap-4 border-b py-8 md:flex-row-reverse md:justify-between">
                    <p className="text-gray-400 text-sm cursor-default">
                        cliente nro: {id}
                    </p>
                    <Chip
                        className="capitalize cursor-default"
                        color={statusColorMap[cliente.cliente?.isActive]}
                        size="lg"
                        variant="flat"
                    >
                        {cliente.cliente?.isActive ? "Activo" : "Inactivo"}
                    </Chip>
                </div>
                <div className="my-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
                        Historial de pagos
                    </h3>
                    <div className="max-w-[700px] mx-auto">
                        <ul className="text-center p-4 bg-gris rounded-lg shadow-small">
                            {cliente.planes?.map((info) => (
                                <li key={info.id} className="font-semibold">
                                    plan {info?.nombre}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClienteDetail;
