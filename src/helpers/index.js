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