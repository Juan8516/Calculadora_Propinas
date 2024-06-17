export function formatCurrent(quantity: number) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency', 
        currency: 'COP', 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(quantity)
}