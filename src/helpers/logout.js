import Swal from "sweetalert2";

export const logout = (setUserLogged) => {
    Swal.fire({
        title: "Estas seguro que deseas cerrar sesion?",
        icon: "warning",
        showCancelButton: true,
        background: "#F5F7F9",
        iconColor: "#4D4E55",
        color: "#4D4E55",
        confirmButtonColor: "#3B82F6",
        cancelButtonColor: "#f17676",
        confirmButtonText: "Cerrar sesion",
    }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.removeItem("usuario");
            setUserLogged("");
        }
    });
};
