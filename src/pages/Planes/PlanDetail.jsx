import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlanById, activar, desactivar } from "../../store/actions/actions";
import { Activate } from "../../assets/icons/Activate";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import useStore from "../../store/useStore";

function PlanDetail() {
    const { id } = useParams();
    const [plan, setPlan] = useState({});
    const { obtenerPlanes } = useStore();
    const handleActivar = async () => {
        const res = await activar(id);
        const message = await res.json();
        alert(message.message);
        obtenerPlanes();
    };
    const handleDesactivar = async () => {
        const res = await desactivar(id);
        const message = await res.json();
        alert(message.message);
        obtenerPlanes();
    };
    const handlePlan = async () => {
        const plan = await getPlanById(id);
        setPlan(plan);
    };
    useEffect(() => {
        handlePlan();
    }, []);
    return (
        <div className="content grow">
            <div className="bg-gris/50 py-10 md:rounded-tl-2xl md:rounded-br-2xl">
                <h2 className="text-5xl font-bold text-cyan-500 text-center">
                    {plan.nombre}
                </h2>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center px-2 py-5 gap-3 sm:gap-4 sm:flex-row max-w-[500px] mx-auto">
                    <button
                        className="btn-red flex items-center justify-center gap-2"
                        onClick={handleDesactivar}
                    >
                        <span>
                            <DeleteIcon />
                        </span>
                        Desactivar
                    </button>
                    <button
                        className="btn-green flex items-center justify-center gap-2"
                        onClick={handleActivar}
                    >
                        <span>
                            <Activate />
                        </span>
                        Activar
                    </button>
                </div>
                <div className="border-t-2 p-4">
                    <h3 className="text-center font-semibold text-3xl">
                        Editar nombre de plan
                    </h3>
                    <form className="flex flex-col items-center justify-center max-w-[400px] mx-auto sm:flex-row gap-5 my-5">
                        <input type="text" className="input-form" />
                        <button className="btn-cyan">Actualizar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PlanDetail;
