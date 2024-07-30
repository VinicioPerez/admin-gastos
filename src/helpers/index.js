export const formatearCantidad = (cantidad) => {
    return new Intl.NumberFormat('es-US', {
        style: 'currency',
        currency: 'USD',
        }).format(cantidad);
    }


    // return Number(cantidad).toLocaleString('es-US', {
    //     style: 'currency',
    //     currency: 'EUR',
    // })

export const generarId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

export const fomatearFecha = fecha => {
    const newFecha = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit',

    }
    return newFecha.toLocaleDateString('es-ES', opciones);

}