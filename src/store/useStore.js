import { create } from "zustand";
import { getPlanes, getClientes } from "./actions/actions";

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
}));

export default useStore;
