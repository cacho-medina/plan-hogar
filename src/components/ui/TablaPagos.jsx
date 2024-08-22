import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
} from "@nextui-org/react";
import { useState, useMemo } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReciboPago from "./Pagos/ReciboPago";

function TablaPagos({ pagos }) {
    const [page, setPage] = useState(1);
    const rowsPerPage = 5;

    const pages = Math.ceil(pagos?.length / rowsPerPage);

    function formatDate(fecha) {
        const fechaFormateada = new Date(fecha);
        return fechaFormateada.toLocaleDateString("es-ES");
    }

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return pagos?.slice(start, end);
    }, [page, pagos]);

    return (
        <Table
            aria-label="Tabla de pagos registrados"
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
            <TableHeader>
                <TableColumn className="text-center">Cliente</TableColumn>
                <TableColumn className="text-center hidden md:flex md:items-center md:justify-center">
                    Plan
                </TableColumn>
                <TableColumn className="text-center">Cuota</TableColumn>
                <TableColumn className="text-center hidden md:flex md:items-center md:justify-center">
                    Fecha
                </TableColumn>
                <TableColumn className="text-center">Recibo</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No hay pagos registrados"}>
                {items.map((item) => {
                    return (
                        <TableRow key={item.id}>
                            <TableCell className="text-center font-semibold">
                                {item.ClientPlan?.Client?.nombre}
                            </TableCell>
                            <TableCell className="text-center hidden md:block">
                                {item.ClientPlan?.Plan?.nombre}
                            </TableCell>
                            <TableCell className="text-center">
                                {item.numeroCuota}
                            </TableCell>
                            <TableCell className="text-center hidden md:block">
                                {formatDate(item.fecha.split("T")[0])}
                            </TableCell>
                            <TableCell className="text-center">
                                <PDFDownloadLink
                                    document={
                                        <ReciboPago
                                            item={item}
                                            formatDate={formatDate}
                                        />
                                    }
                                    fileName="Comprobante.pdf"
                                >
                                    {({ loading, url, error, blob }) =>
                                        loading ? (
                                            <button>Cargando..</button>
                                        ) : (
                                            <button className="transition hover:scale-110">
                                                <span>
                                                    <img
                                                        src="/download.svg"
                                                        className="w-5"
                                                        alt="descargar comprobante"
                                                    />
                                                </span>
                                            </button>
                                        )
                                    }
                                </PDFDownloadLink>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}

export default TablaPagos;
