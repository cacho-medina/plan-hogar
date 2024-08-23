import { formatDate } from "../../helpers/queries";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReciboPago from "./Pagos/ReciboPago";
import Loader from "./Loader";

function TablaPagosCliente({ pagos, cliente }) {
    const extra = {
        cliente,
        plan: pagos?.plan?.nombre,
    };
    return (
        <div className="bg-white py-4 sm:px-4">
            <ul>
                {pagos?.pagosByPlan?.map((item) => (
                    <li
                        key={item.id}
                        className="flex items-center justify-between"
                    >
                        <p>
                            Recibo cuota{" "}
                            <span className="font-bold">
                                {item.numeroCuota}
                            </span>{" "}
                            - {formatDate(item?.fecha)}
                        </p>
                        <p>
                            <PDFDownloadLink
                                document={
                                    <ReciboPago
                                        item={item}
                                        formatDate={formatDate}
                                        info={extra}
                                    />
                                }
                                fileName="Comprobante.pdf"
                            >
                                {({ loading, error }) =>
                                    loading ? (
                                        <Loader />
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
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TablaPagosCliente;
