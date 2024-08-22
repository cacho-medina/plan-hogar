import { create } from "zustand";
import { getPlanes, getClientes, getPagos } from "./actions/actions";

const initialState = {
    planes: [],
    clientes: [],
    pagos: [],
    productos: [],
};

const useStore = create((set) => ({
    ...initialState,
    obtenerPlanes: () => getPlanes(set),
    obtenerClientes: () => getClientes(set),
    obtenerPagos: () => getPagos(set),
}));

export default useStore;
