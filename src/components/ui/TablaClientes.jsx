import React from "react";
import { Link } from "react-router-dom";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Tooltip,
    Pagination,
} from "@nextui-org/react";
import { EyeIcon } from "../../assets/icons/EyeIcon";

export default function TablaClientes({ columns, users }) {
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "nombre":
                return (
                    <div>
                        <p className="font-semibold text-center cursor-default">
                            {user.nombre}
                        </p>
                    </div>
                );
            case "Dni":
                return (
                    <div>
                        <p className="text-bold text-center capitalize text-default-400 cursor-default">
                            {user.documento}
                        </p>
                    </div>
                );
            case "actions":
                return (
                    <div className="relative flex justify-center items-center gap-2">
                        <Tooltip
                            content="Detalle"
                            className="flex items-center gap-2"
                        >
                            <Link to={`/clientes/${user.id}`}>
                                <span className="text-lg md:text-xl text-default-400 cursor-pointer active:opacity-50 transition-colors hover:text-blue-500 hover:font-bold">
                                    <EyeIcon />
                                </span>
                            </Link>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const [page, setPage] = React.useState(1);
    const rowsPerPage = 5;

    const pages = Math.ceil(users?.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return users?.slice(start, end);
    }, [page, users]);

    return (
        <Table
            aria-label="Tabla con lista de clientes"
            bottomContent={
                <div className="flex w-full justify-center">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                    />
                </div>
            }
        >
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.key} className="text-center">
                        {column.label}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody
                items={items}
                emptyContent={"No hay clientes registrados"}
            >
                {(item) => (
                    <TableRow key={item.key}>
                        {(columnKey) => (
                            <TableCell className="text-center">
                                {renderCell(item, columnKey)}
                            </TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
