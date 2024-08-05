const user = {
    username: "cacho-medina",
    password: "leo10MESSI.",
};

export const login = (usuario) => {
    try {
        /*  const res = fetch(`${api_usuarios}/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        });
        return res; */
        if (
            usuario.username === user.username &&
            usuario.password === user.password
        ) {
            return user;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
};
