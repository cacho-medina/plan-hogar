import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlanById, activar, desactivar } from "../../store/actions/actions";
import { Activate } from "../../assets/icons/Activate";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import useStore from "../../store/useStore";
import { updatePlan } from "../../store/actions/actions";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Chip, Select, SelectItem } from "@nextui-org/react";

function PlanDetail() {
    const navigate = useNavigate();
    const {
        reset,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm();
    const { id } = useParams();

    const [productos, setProductos] = useState([{ idProd: "", cantidad: 1 }]);
    const handleInputChange = (index, e) => {
        const newProducts = productos.map((product, i) => {
            if (i === index) {
                return { ...product, [e.target.name]: e.target.value };
            }
            return product;
        });
        setProductos(newProducts);
    };
    const handleAddProducts = () => {
        setProductos([
            ...productos,
            {
                idProd: "",
                cantidad: 1,
            },
        ]);
    };

    const [plan, setPlan] = useState({});
    const { obtenerPlanes, inventario } = useStore();
    const inventarioActivo = inventario.filter((item) => item.isActive);
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
        // Filtrar los productos incompletos
        const filteredProducts = productos.filter(
            (product) => product.idProd !== ""
        );
        data.productos = filteredProducts;
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
                <div className="py-8 px-3 space-y-6">
                    <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row max-w-[300px] mx-auto">
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
                    <div className="flex items-center justify-center flex-wrap gap-2">
                        {plan.Productos?.map((item) => (
                            <Chip
                                key={item.id}
                                className="capitalize cursor-default"
                                color="secondary"
                                size="lg"
                                variant="flat"
                            >
                                {item.nombre}
                            </Chip>
                        ))}
                    </div>
                </div>
                <div className="border-t-2 p-4">
                    <h3 className="text-center font-semibold text-3xl">
                        Editar datos del plan
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
                        {productos.map((prod, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-stretch md:flex-row md:items-center justify-center gap-2"
                            >
                                <div className="w-full">
                                    <Select
                                        label="Seleccione un producto"
                                        name="idProd"
                                        onChange={(event) =>
                                            handleInputChange(index, event)
                                        }
                                    >
                                        {inventarioActivo.map((item) => (
                                            <SelectItem
                                                key={item.id}
                                                value={item.id}
                                            >
                                                {item.nombre}
                                            </SelectItem>
                                        ))}
                                    </Select>
                                </div>
                                <div>
                                    <input
                                        className="input-form"
                                        type="number"
                                        placeholder="cantidad"
                                        name="cantidad"
                                        onChange={(event) =>
                                            handleInputChange(index, event)
                                        }
                                        value={prod.cantidad}
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn-secondary"
                            onClick={handleAddProducts}
                        >
                            Agregar producto
                        </button>
                        <button className="btn-cyan">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PlanDetail;
