const api = import.meta.env.VITE_API;

//--------------------------CLIENTES ACTIONS---------------------------------
export const postClientes = async (cliente) => {
    try {
        const res = await fetch(`${api}/cliente`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cliente),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
export const getClientes = async (set) => {
    try {
        const res = await fetch(`${api}/cliente`);
        const clientes = await res.json();
        set({ clientes: clientes });
    } catch (error) {
        console.error(error);
    }
};
export const getClienteById = async (id) => {
    try {
        const res = await fetch(`${api}/cliente/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
//--------------------------PLAN ACTIONS---------------------------------
export const getPlanes = async (set) => {
    try {
        const res = await fetch(`${api}/plan`);
        const data = await res.json();
        set({ planes: data });
    } catch (error) {
        console.error(error);
    }
};
export const getPlanById = async (id) => {
    try {
        const res = await fetch(`${api}/plan/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
export const postPlan = async (plan) => {
    try {
        const res = await fetch(`${api}/plan`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plan),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
export const desactivar = async (id) => {
    try {
        const res = await fetch(`${api}/plan/delete/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
export const activar = async (id) => {
    try {
        const res = await fetch(`${api}/plan/activate/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
//cambiar el back para asegurar que no se repite el nombre
export const updatePlan = () => {};
