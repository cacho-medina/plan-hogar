import { create } from "zustand";
import {
    getPlanes,
    getClientes,
    getPagos,
    getProductos,
} from "./actions/actions";

const initialState = {
    planes: [],
    clientes: [],
    pagos: [],
    inventario: [],
};

const useStore = create((set) => ({
    ...initialState,
    obtenerPlanes: () => getPlanes(set),
    obtenerInventario: () => getProductos(set),
    obtenerClientes: () => getClientes(set),
    obtenerPagos: () => getPagos(set),
}));

export default useStore;
