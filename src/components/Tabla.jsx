import {
    Chip,
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { EditIcon } from "../assets/icons/EditIcon";

const statusColorMap = {
    true: "success",
    false: "danger",
};

function Tabla({ info, inventario }) {
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    const pages = Math.ceil(info?.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return info?.slice(start, end);
    }, [page, info]);
    return (
        <Table
            aria-label="Tabla de planes registrados"
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="secondary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
        >
            <TableHeader>
                <TableColumn className="text-center">Nombre</TableColumn>
                <TableColumn className="text-center">Estado</TableColumn>
                <TableColumn className="text-center">Editar</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No hay planes registrados"}>
                {items.map((item) => {
                    return (
                        <TableRow
                            plan={item}
                            key={item.id}
                            className={`${item.cantidad < 4 && "bg-red-100"}`}
                        >
                            <TableCell className="text-center font-semibold">
                                {item.nombre}
                            </TableCell>
                            <TableCell className="text-center font-semibold">
                                <Chip
                                    className="capitalize"
                                    color={statusColorMap[item.isActive]}
                                    size="sm"
                                    variant="flat"
                                >
                                    {item.isActive ? "Activo" : "Inactivo"}
                                </Chip>
                            </TableCell>
                            <TableCell className="flex justify-center">
                                <Link
                                    to={`/${
                                        inventario ? "inventario" : "plan"
                                    }/${item.id}`}
                                >
                                    <span className="text-lg md:text-xl text-default-400 cursor-pointer active:opacity-50 transition-colors hover:text-cyan-500 hover:font-bold">
                                        <EditIcon />
                                    </span>
                                </Link>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
export default Tabla;
