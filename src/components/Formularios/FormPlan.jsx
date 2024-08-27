import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    CheckboxGroup,
    Checkbox,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { postPlan } from "../../store/actions/actions";
import useStore from "../../store/useStore";
import Swal from "sweetalert2";
import { useState } from "react";

export default function FormPlan({ isOpen, onOpenChange, onClose }) {
    const {
        reset,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm();
    const { obtenerPlanes, inventario } = useStore();
    const [selected, setSelected] = useState([]);
    const inventarioActivo = inventario.filter((item) => item.isActive);

    const onSubmit = async (data) => {
        data.productosIds = selected;

        const res = await postPlan(data);
        if (!res.ok) {
            const error = await res.json();
            Swal.fire({
                title: "Error",
                text: `${error.message || "Error al registra plan"}`,
                icon: "error",
            });
        } else {
            Swal.fire({
                title: "Listo!",
                text: "Plan creado con exito!",
                icon: "success",
            });
            obtenerPlanes();
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
                            Registro de nuevo Plan
                        </ModalHeader>
                        <ModalBody>
                            <form
                                className="flex flex-col justify-center gap-4 my-4"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Nombre del plan..."
                                        className="input-form"
                                        {...register("nombre", {
                                            required:
                                                "ingrese el nombre del plan",
                                            minLength: {
                                                value: 5,
                                                message:
                                                    "Debe ingresar como minimo 5 caracteres",
                                            },
                                            maxLength: {
                                                value: 100,
                                                message:
                                                    "Debe ingresar como maximo 100 caracteres",
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
                                    <div className="flex flex-col gap-3">
                                        <CheckboxGroup
                                            label="Seleccione los productos del plan"
                                            color="secondary"
                                            value={selected}
                                            onValueChange={setSelected}
                                        >
                                            {inventarioActivo.map((item) => (
                                                <Checkbox
                                                    key={item.nombre}
                                                    value={item.id}
                                                >
                                                    {item.nombre}
                                                </Checkbox>
                                            ))}
                                        </CheckboxGroup>
                                    </div>
                                </div>
                                <button className="btn-cyan">Crear</button>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
