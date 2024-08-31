import useStore from "../store/useStore";
import FormPlan from "../components/Formularios/FormPlan";
import { useDisclosure } from "@nextui-org/react";
import Tabla from "../components/Tabla";

function Planes() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const { planes } = useStore();

    return (
        <>
            <FormPlan
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
            />
            <div className="content">
                <div className="bg-cyan-500 py-10 md:rounded-tl-2xl">
                    <h2 className="text-6xl font-bold text-white text-center">
                        Planes
                    </h2>
                </div>
                <div className="grow px-2 md:px-6">
                    <div className="flex items-center justify-center border-b py-8 mb-10">
                        <button className="btn-cyan text-2xl" onClick={onOpen}>
                            Agregar nuevo Plan
                        </button>
                    </div>
                    <div className="max-w-[700px] lg:mx-auto my-6">
                        <Tabla info={planes}></Tabla>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Planes;
