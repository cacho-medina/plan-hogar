/* import { Pagination } from "@nextui-org/react";
import { useState, useMemo } from "react"; */

function TablaPagosCliente({ pagos }) {
    console.log(pagos);
    /* const [page, setPage] = useState(1);
    const rowsPerPage = 8;

    const pages = Math.ceil(pagos?.length / rowsPerPage);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return pagos?.slice(start, end);
    }, [page, pagos]); */
    return (
        <div>
            <h3>Pagos de {pagos?.plan?.nombre}</h3>
            <ul>
                {pagos?.pagosByPlan?.map((item) => (
                    <li key={item.id}>{item?.fecha}</li>
                ))}
            </ul>
            {/* <div className="flex w-full justify-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={(page) => setPage(page)}
                />
            </div> */}
        </div>
    );
}

export default TablaPagosCliente;
