import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function Form({ isOpen, onOpenChange }) {
    const {
        reset,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
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
                            Registro de nuevo cliente
                        </ModalHeader>
                        <ModalBody>
                            <form
                                className="flex flex-col justify-center gap-4 my-4"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Nombre completo..."
                                        className="input-form"
                                        {...register("nombreCompleto", {
                                            required:
                                                "ingrese el nombre y apellido",
                                            minLength: {
                                                value: 5,
                                                message:
                                                    "Debe ingresar como minimo 5 caracteres",
                                            },
                                            maxLength: {
                                                value: 40,
                                                message:
                                                    "Debe ingresar como maximo 40 caracteres",
                                            },
                                        })}
                                    />
                                    {errors.nombreCompleto && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.nombreCompleto.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Numero de documento..."
                                        className="input-form"
                                        {...register("documento", {
                                            required: "ingrese el documento",
                                            minLength: {
                                                value: 5,
                                                message:
                                                    "Debe ingresar como minimo 7 caracteres",
                                            },
                                            maxLength: {
                                                value: 40,
                                                message:
                                                    "Debe ingresar como maximo 8 caracteres",
                                            },
                                        })}
                                    />
                                    {errors.documento && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.documento.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Select
                                        label="Seleccione un plan"
                                        {...register("plan", {
                                            required: "seleccione un plan",
                                        })}
                                    >
                                        <SelectItem key="plan 1">
                                            plan 1
                                        </SelectItem>
                                        <SelectItem key="plan 2">
                                            plan 2
                                        </SelectItem>
                                    </Select>
                                    {errors.plan && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.plan.message}
                                        </p>
                                    )}
                                </div>
                                <button className="btn-blue">Registrar</button>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
