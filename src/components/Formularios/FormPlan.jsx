import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Select,
    SelectItem,
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
    const inventarioActivo = inventario.filter((item) => item.isActive);

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
    const onSubmit = async (data) => {
        // Filtrar los productos incompletos
        const filteredProducts = productos.filter(
            (product) => product.idProd !== ""
        );
        data.productos = filteredProducts;
        console.log(data);
        const res = await postPlan(data);
        if (!res.ok) {
            const error = await res.json();
            console.log(error);
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
                        <ModalBody className="max-h-[600px] overflow-y-scroll">
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
                                                    handleInputChange(
                                                        index,
                                                        event
                                                    )
                                                }
                                            >
                                                {inventarioActivo.map(
                                                    (item) => (
                                                        <SelectItem
                                                            key={item.id}
                                                            value={item.id}
                                                        >
                                                            {item.nombre}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </Select>
                                        </div>
                                        <div>
                                            <input
                                                className="input-form"
                                                type="number"
                                                placeholder="cantidad"
                                                name="cantidad"
                                                onChange={(event) =>
                                                    handleInputChange(
                                                        index,
                                                        event
                                                    )
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
                                <button className="btn-cyan mt-5">Crear</button>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
