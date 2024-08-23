export function formatDate(fecha) {
    const fechaFormateada = new Date(fecha);
    return fechaFormateada.toLocaleDateString("es-ES");
}
