import { useParams } from "react-router-dom";

function ClienteDetail() {
    const { id } = useParams();
    return (
        <div className="content grow">
            <div className="bg-gris/50 py-10 md:rounded-tl-2xl md:rounded-br-2xl">
                <h2 className="text-6xl font-bold text-blue-500 text-center">
                    Cliente {id}
                </h2>
            </div>
            <div>
                <p>Info de cliente con id: {id}</p>
            </div>
        </div>
    );
}

export default ClienteDetail;
