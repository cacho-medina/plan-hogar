const api_usuarios = import.meta.env.VITE_API_USERS;

export const login = async (usuario) => {
    try {
        const res = await fetch(`${api_usuarios}/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
