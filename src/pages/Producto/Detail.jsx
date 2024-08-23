import { useParams, useNavigate } from "react-router-dom";
import {
    activarProducto,
    desactivarProducto,
    getProductoById,
    putProducto,
} from "../../store/actions/actions";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import { Activate } from "../../assets/icons/Activate";
import Swal from "sweetalert2";
import useStore from "../../store/useStore";
import { Chip } from "@nextui-org/react";

function variantColor(cantidad) {
    if (cantidad > 0 && cantidad < 5) {
        return "warning";
    } else if (cantidad > 0) {
        return "success";
    } else {
        return "danger";
    }
}

function Detail() {
    const [producto, setProducto] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();
    const { obtenerInventario } = useStore();
    const {
        reset,
        formState: { errors },
        handleSubmit,
        register,
    } = useForm();
    const onSubmit = async (data) => {
        if (data.nombre === "" && data.cantidad === "") {
            return Swal.fire({
                title: "Error",
                text: "Ingrese la cantidad actualizada del stock o el nombre nuevo del producto",
                icon: "error",
            });
        }
        const res = await putProducto(id, data);
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
                text: "El producto fue actualizado!",
                icon: "success",
            });
            obtenerInventario();
            navigate("/productos");
        }
        reset();
    };
    const handleDesactivar = () => {
        Swal.fire({
            title: "Estas seguro que deseas desactivar el producto?",
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
                const res = await desactivarProducto(id);
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
                        text: "El producto fue desactivado!",
                        icon: "success",
                    });
                    obtenerInventario();
                    navigate("/productos");
                }
            }
        });
    };
    const handleActivar = () => {
        Swal.fire({
            title: "Estas seguro que deseas activar el producto?",
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
                const res = await activarProducto(id);
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
                        text: "El producto fue activado!",
                        icon: "success",
                    });
                    obtenerInventario();
                    navigate("/productos");
                }
            }
        });
    };
    const handleProducto = async () => {
        const producto = await getProductoById(id);
        setProducto(producto);
    };
    console.log(producto);
    useEffect(() => {
        handleProducto();
    }, []);
    return (
        <div className="content grow">
            <div className="bg-gris/50 py-10 md:rounded-tl-2xl md:rounded-br-2xl">
                <h2 className="text-5xl font-bold text-red-500 text-center">
                    {producto.nombre}
                </h2>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center px-2 py-5 gap-3 sm:gap-4 max-w-[300px] mx-auto">
                    <Chip
                        className="capitalize cursor-default"
                        color={variantColor(producto.cantidad)}
                        size="lg"
                        variant="flat"
                    >
                        stock {producto.cantidad}
                    </Chip>
                    {producto.isActive ? (
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
                        <div>
                            <input
                                type="text"
                                className="input-form"
                                placeholder="Ingrese la cantidad..."
                                {...register("cantidad", {
                                    min: {
                                        value: 1,
                                        message: "Ingrese mayor o igual a 1",
                                    },
                                })}
                            />
                            {errors.cantidad && (
                                <p className="text-red-500 font-semibold">
                                    {errors.cantidad.message}
                                </p>
                            )}
                        </div>
                        <button className="btn-rojo">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Detail;
