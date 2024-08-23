import useStore from "../store/useStore";
import Row from "../components/ui/Plan/Row";
import { useDisclosure } from "@nextui-org/react";
import FormProducto from "../components/Formularios/FormProducto";

function Productos() {
    const { inventario } = useStore();
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    return (
        <>
            <FormProducto
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
            />

            <div className="content">
                <div className="bg-red-500 py-10 md:rounded-tl-2xl">
                    <h2 className="text-6xl font-bold text-white text-center">
                        Invantario
                    </h2>
                </div>
                <div className="grow px-2 md:px-6">
                    <div className="flex items-center justify-center border-b py-8 mb-10">
                        <button className="btn-rojo text-2xl" onClick={onOpen}>
                            Agregar Producto
                        </button>
                    </div>
                    <div className="max-w-[650px] lg:mx-auto my-6 bg-gris rounded-xl overflow-hidden mx-auto shadow-small">
                        <div className="bg-white py-4 sm:px-4">
                            <table className="min-w-full text-sm text-center rounded-lg cursor-default overflow-hidden">
                                <thead className="bg-gris text-gray-400">
                                    <tr className="">
                                        <th scope="col" className="px-6 py-3">
                                            Nombre
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Estado
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Opciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inventario.map((item) => (
                                        <Row
                                            inventario={true}
                                            plan={item}
                                            key={item.id}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Productos;
