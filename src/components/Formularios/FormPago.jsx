import { useForm } from "react-hook-form";
import useStore from "../../store/useStore";
import Swal from "sweetalert2";
import { Select, SelectItem } from "@nextui-org/react";
import { postPago } from "../../store/actions/actions";
import { useNavigate } from "react-router-dom";

function FormPago() {
    const navigate = useNavigate();
    const {
        formState: { errors },
        handleSubmit,
        register,
        reset,
    } = useForm();
    const { planes } = useStore();
    const planesActivos = planes.filter((plan) => plan.isActive);
    const onSubmit = async (data) => {
        const res = await postPago(data);
        if (!res.ok) {
            const error = await res.json();
            Swal.fire({
                title: "Error",
                text: `${error.message || "No se pudo registrar el pago"}`,
                icon: "error",
            });
        } else {
            Swal.fire({
                title: "Listo!",
                text: "El pago fue cargado con exito!",
                icon: "success",
            });
            navigate("/");
            reset();
        }
    };
    return (
        <form
            className="flex flex-col justify-center gap-4 my-4 md:max-w-[600px] md:mx-auto"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <input
                    type="text"
                    placeholder="Numero de documento..."
                    className="input-form"
                    {...register("documento", {
                        required: "ingrese el documento",
                        minLength: {
                            value: 7,
                            message: "Debe ingresar como minimo 7 caracteres",
                        },
                        maxLength: {
                            value: 8,
                            message: "Debe ingresar como maximo 8 caracteres",
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
                        <SelectItem key={item.id}>{item.nombre}</SelectItem>
                    ))}
                </Select>
                {errors.idPlan && (
                    <p className="text-red-500 font-semibold">
                        {errors.idPlan.message}
                    </p>
                )}
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Ingresa el monto..."
                    className="input-form"
                    {...register("monto", {
                        required: "ingrese el monto de la cuota",
                        min: {
                            value: 1000,
                            message: "El precio debe ser mayor o igual a 1000",
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
                <input
                    type="text"
                    placeholder="Numero de cuota..."
                    className="input-form"
                    {...register("numeroCuota", {
                        required: "ingrese el numero de la cuota a pagar",
                        min: {
                            value: 1,
                            message: "ingrese un numero entre 1 y 15",
                        },
                        max: {
                            value: 15,
                            message: "ingrese un numero entre 1 y 15",
                        },
                    })}
                />
                {errors.numeroCuota && (
                    <p className="text-red-500 font-semibold">
                        {errors.numeroCuota.message}
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
                    <SelectItem key="Efectivo">Efectivo</SelectItem>
                    <SelectItem key="Transferencia">Transferencia</SelectItem>
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
                        required: "ingrese el nombre del cobrador",
                    })}
                />
                {errors.cobrador && (
                    <p className="text-red-500 font-semibold">
                        {errors.cobrador.message}
                    </p>
                )}
            </div>
            <button className="btn-secondary">Registrar</button>
        </form>
    );
}

export default FormPago;
