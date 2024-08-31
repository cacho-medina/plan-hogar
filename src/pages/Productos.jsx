import useStore from "../store/useStore";
import Tabla from "../components/Tabla";
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
                    <div className="max-w-[700px] lg:mx-auto my-6">
                        <Tabla inventario={true} info={inventario}></Tabla>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Productos;
