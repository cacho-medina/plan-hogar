const api = import.meta.env.VITE_API;

//--------------------------CLIENTES ACTIONS---------------------------------
export const postClientes = async (cliente) => {
    try {
        const res = await fetch(`${api}/cliente`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
            body: JSON.stringify(cliente),
        });
        return res;
    } catch (error) {
        console.error(error);
        return error;
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
//--------------------------PAGOS ACTIONS---------------------------------

export const getPagos = async (set) => {
    try {
        const res = await fetch(`${api}/pago`);
        const data = await res.json();
        set({ pagos: data });
    } catch (error) {
        console.error(error.message);
    }
};
export const postPago = async (data) => {
    try {
        const res = await fetch(`${api}/pago/registrar`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
            body: JSON.stringify(data),
        });
        return res;
    } catch (error) {
        console.error(error);
        return error;
    }
};
//--------------------------INVENTARIO ACTIONS---------------------------------

export const getProductos = async (set) => {
    try {
        const res = await fetch(`${api}/inventario`);
        const data = await res.json();
        set({ inventario: data });
    } catch (error) {
        console.error(error);
    }
};
export const getProductoById = async (id) => {
    try {
        const res = await fetch(`${api}/inventario/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
export const postProducto = async (data) => {
    try {
        const res = await fetch(`${api}/inventario`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
            body: JSON.stringify(data),
        });
        return res;
    } catch (error) {
        console.error(error);
        return error;
    }
};
export const putProducto = async (id, data) => {
    try {
        const res = await fetch(`${api}/inventario/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
            body: JSON.stringify(data),
        });
        return res;
    } catch (error) {
        console.error(error);
        return error;
    }
};
export const desactivarProducto = async (id) => {
    try {
        const res = await fetch(`${api}/inventario/delete/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
export const activarProducto = async (id) => {
    try {
        const res = await fetch(`${api}/inventario/activate/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
        });
        return res;
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
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
            body: JSON.stringify(plan),
        });
        return res;
    } catch (error) {
        console.error(error.message);
    }
};
export const desactivar = async (id) => {
    try {
        const res = await fetch(`${api}/plan/delete/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
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
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
//cambiar el back para asegurar que no se repite el nombre
export const updatePlan = async (id, data) => {
    try {
        const res = await fetch(`${api}/plan/update/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-token": JSON.parse(sessionStorage.getItem("usuario")).token,
            },
            body: JSON.stringify(data),
        });
        return res;
    } catch (error) {
        console.error(error);
        return error;
    }
};
