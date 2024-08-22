import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlanById, activar, desactivar } from "../../store/actions/actions";
import { Activate } from "../../assets/icons/Activate";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import useStore from "../../store/useStore";
import { updatePlan } from "../../store/actions/actions";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function PlanDetail() {
    const navigate = useNavigate();
    const {
        reset,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm();
    const { id } = useParams();
    const [plan, setPlan] = useState({});
    const { obtenerPlanes } = useStore();
    const handleActivar = async () => {
        Swal.fire({
            title: "Estas seguro que deseas activar el plan?",
            icon: "warning",
            showCancelButton: true,
            background: "#F5F7F9",
            iconColor: "#4D4E55",
            color: "#4D4E55",
            confirmButtonColor: "#4ADE80",
            cancelButtonColor: "#f17676",
            confirmButtonText: "activar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await activar(id);
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
                        text: "El plan fue activado!",
                        icon: "success",
                    });
                    obtenerPlanes();
                    navigate("/planes");
                }
            }
        });
    };
    const handleDesactivar = async () => {
        Swal.fire({
            title: "Estas seguro que deseas desactivar el plan?",
            icon: "warning",
            showCancelButton: true,
            background: "#F5F7F9",
            iconColor: "#4D4E55",
            color: "#4D4E55",
            cancelButtonColor: "#3B82F6",
            confirmButtonColor: "#f17676",
            confirmButtonText: "desactivar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await desactivar(id);
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
                        text: "El plan fue desactivado!",
                        icon: "success",
                    });
                    obtenerPlanes();
                    navigate("/planes");
                }
            }
        });
    };
    const handlePlan = async () => {
        const plan = await getPlanById(id);
        setPlan(plan);
    };
    const onSubmit = async (data) => {
        const res = await updatePlan(id, data);
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
                text: "El plan fue actualizado!",
                icon: "success",
            });
            obtenerPlanes();
            navigate("/planes");
        }
        reset();
    };
    useEffect(() => {
        handlePlan();
    }, []);
    return (
        <div className="content grow">
            <div className="bg-gris/50 py-10 md:rounded-tl-2xl md:rounded-br-2xl">
                <h2 className="text-5xl font-bold text-cyan-500 text-center">
                    {plan.nombre}
                </h2>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center px-2 py-5 gap-3 sm:gap-4 sm:flex-row max-w-[300px] mx-auto">
                    {plan.isActive ? (
                        <button
                            className="btn-red flex items-center justify-center gap-2"
                            onClick={handleDesactivar}
                        >
                            <span>
                                <DeleteIcon />
                            </span>
                            Desactivar
                        </button>
                    ) : (
                        <button
                            className="btn-green flex items-center justify-center gap-2"
                            onClick={handleActivar}
                        >
                            <span>
                                <Activate />
                            </span>
                            Activar
                        </button>
                    )}
                </div>
                <div className="border-t-2 p-4">
                    <h3 className="text-center font-semibold text-3xl">
                        Editar nombre de plan
                    </h3>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col items-stretch max-w-[400px] mx-auto gap-5 my-5"
                    >
                        <div>
                            <input
                                type="text"
                                className="input-form"
                                placeholder="Ingrese el nuevo nombre..."
                                {...register("nombre", {
                                    required: "Ingrese el nombre que desea",
                                    minLength: {
                                        value: 4,
                                        message:
                                            "Ingrese un nombre de al menos 4 caracteres",
                                    },
                                })}
                            />
                            {errors.nombre && (
                                <p className="text-red-500 font-semibold">
                                    {errors.nombre.message}
                                </p>
                            )}
                        </div>
                        <button className="btn-cyan">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PlanDetail;
