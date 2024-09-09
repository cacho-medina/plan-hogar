import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import useStore from "../../store/useStore";
import { postClientes } from "../../store/actions/actions";
import Swal from "sweetalert2";

export default function FormCliente({ isOpen, onOpenChange, onClose }) {
    const { obtenerClientes, obtenerPagos } = useStore();
    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
    } = useForm();
    const planes = useStore((state) => state.planes);
    const planesActivos = planes.filter((plan) => plan.isActive);
    const onSubmit = async (data) => {
        console.log(data);
        const res = await postClientes(data);
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
                text: "Cliente registrado con exito!",
                icon: "success",
            });
            obtenerClientes();
            obtenerPagos();
            onClose();
        }
        reset();
    };

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top"
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
                            <p className="text-slate-600">
                                Registre el cliente y su primer pago*
                            </p>
                            <form
                                className="flex flex-col justify-center gap-4 my-4"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Nombre completo..."
                                        className="input-form"
                                        {...register("nombre", {
                                            required:
                                                "ingrese el nombre y apellido",
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
                                                value: 7,
                                                message:
                                                    "Debe ingresar como minimo 7 caracteres",
                                            },
                                            maxLength: {
                                                value: 8,
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
                                        {...register("idPlan", {
                                            required: "seleccione un plan",
                                        })}
                                    >
                                        {planesActivos.map((item) => (
                                            <SelectItem key={item.id}>
                                                {item.nombre}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                    {errors.idPlan && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.idPlan.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Select
                                        label="Extension de plan"
                                        {...register("extension", {
                                            required:
                                                "seleccione una opcion de extension",
                                        })}
                                    >
                                        <SelectItem key={10}>10</SelectItem>
                                        <SelectItem key={15}>15</SelectItem>
                                    </Select>
                                    {errors.extension && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.extension.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Ingresa el monto..."
                                        className="input-form"
                                        {...register("monto", {
                                            required:
                                                "ingrese el monto de la primera cuota",
                                            min: {
                                                value: 1000,
                                                message:
                                                    "El precio debe ser mayor o igual a 1000",
                                            },
                                        })}
                                    />
                                    {errors.monto && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.monto.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Select
                                        label="Seleccione medio de pago"
                                        {...register("medio", {
                                            required:
                                                "ingrese el medio de pago, transferencia o efectivo",
                                        })}
                                    >
                                        <SelectItem key="Efectivo">
                                            Efectivo
                                        </SelectItem>
                                        <SelectItem key="Transferencia">
                                            Transferencia
                                        </SelectItem>
                                    </Select>
                                    {errors.medio && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.medio.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Ingresa el nombre del cobrador..."
                                        className="input-form"
                                        {...register("cobrador", {
                                            required:
                                                "ingrese el nombre del cobrador",
                                        })}
                                    />
                                    {errors.cobrador && (
                                        <p className="text-red-500 font-semibold">
                                            {errors.cobrador.message}
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
