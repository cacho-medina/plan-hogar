import { Chip } from "@nextui-org/react";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { Link } from "react-router-dom";

const statusColorMap = {
    true: "success",
    false: "danger",
};

function Row({ plan, inventario }) {
    return (
        <>
            <tr className="transition-colors hover:bg-neutral-50">
                <th className="px-6 py-3 font-semibold">{plan.nombre}</th>
                <td className="px-6 py-3 font-semibold">
                    <Chip
                        className="capitalize"
                        color={statusColorMap[plan.isActive]}
                        size="sm"
                        variant="flat"
                    >
                        {plan.isActive ? "Activo" : "Inactivo"}
                    </Chip>
                </td>
                <td className="px-6 py-3 flex justify-center">
                    <Link
                        to={`/${inventario ? "inventario" : "plan"}/${plan.id}`}
                    >
                        <span className="text-lg md:text-xl text-default-400 cursor-pointer active:opacity-50 transition-colors hover:text-cyan-500 hover:font-bold">
                            <EditIcon />
                        </span>
                    </Link>
                </td>
            </tr>
        </>
    );
}

export default Row;
