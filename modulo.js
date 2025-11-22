function agregarItems (lista, ...items){
    const nuevo = [...lista, ...items]
    return nuevo
}

function obtenerInfo(item) {
    try {
        const {id, nombre, precio} = inventario;
        if (id == undefined || nombre == undefined || precio == undefined){
            throw new Error("un mensaje claro");
            
        }
    } catch (error) {
        
    }
}
const inventario = {
    id: 1,
    nombre: "Manuel",
    precio: 0.5
}