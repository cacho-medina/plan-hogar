import FormPago from "../../components/Formularios/FormPago";

function Registro() {
    return (
        <div className="content">
            <div className="bg-gris-oscuro py-10 md:rounded-tl-2xl">
                <h2 className="text-5xl sm:text-6xl font-bold text-white text-center">
                    Registrar Pago
                </h2>
            </div>
            <div className="px-4 py-5">
                <FormPago></FormPago>
            </div>
        </div>
    );
}

export default Registro;
