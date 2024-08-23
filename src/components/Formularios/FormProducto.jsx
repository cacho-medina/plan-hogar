import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { postProducto } from "../../store/actions/actions";
import useStore from "../../store/useStore";
import Swal from "sweetalert2";

function FormProducto({ isOpen, onOpenChange, onClose }) {
    const {
        reset,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm();
    const { obtenerInventario } = useStore();
    const onSubmit = async (data) => {
        const res = await postProducto(data);
        if (!res.ok) {
            const error = await res.json();
            Swal.fire({
                title: "Error",
                text: `${error.message}`,
                icon: "error",
            });
        } else {
            Swal.fire({
                title: "Listo!",
                text: "Producto creado con exito!",
                icon: "success",
            });
            obtenerInventario();
            onClose();
        }
        reset();
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="center"
            backdrop="blur"
            isDismissable={false}
            isKeyboardDismissDisabled={true}
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-2xl">
                            Registro de nuevo Producto
                        </ModalHeader>
                        <ModalBody>
                            <form
                                className="flex flex-col justify-center gap-4 my-4"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Nombre del producto..."
                                        className="input-form"
                                        {...register("nombre", {
                                            required:
                                                "ingrese el nombre del producto",
                                            minLength: {
                                                value: 5,
                                                message:
                                                    "Debe ingresar como minimo 5 caracteres",
                                            },
                                        })}
                                    />
                                    {errors.nombre && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.nombre.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Cantidad en stock..."
                                        className="input-form"
                                        {...register("cantidad", {
                                            required:
                                                "ingrese el stock del producto",
                                            min: {
                                                value: 1,
                                                message:
                                                    "Debe ingresar un numero mayor o igual a 1",
                                            },
                                        })}
                                    />
                                    {errors.cantidad && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.cantidad.message}
                                        </p>
                                    )}
                                </div>
                                <button className="btn-rojo">Crear</button>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}

export default FormProducto;
