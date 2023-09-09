import { Guitarra } from "@/types/guitarraTypes";



export const agregarCarrito = (guitarra: Guitarra): void => {
    let carrito: Guitarra[] = JSON.parse(localStorage.getItem("carrito") || "[]")

    // Chequear que la guitarra esté en el carrito
    if (carrito.some((guitarraState: Guitarra) => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map((guitarraState: Guitarra) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    } else {
      // Si no existe, se agrega
      localStorage.setItem('carrito', JSON.stringify([...carrito, guitarra]));
    }
}

 export const eliminarProducto = (id: number | undefined) => {
    let carrito: Guitarra[] = JSON.parse(localStorage.getItem("carrito") || "[]")
    const carritoActualizado = carrito.filter( producto => producto.id != id)
    window.localStorage.setItem('carrito', JSON.stringify( carritoActualizado ));
}

export const actualizarCantidad = (guitarra: Guitarra) => {
    let carrito: Guitarra[] = JSON.parse(localStorage.getItem("carrito") || "[]")
    console.log(carrito)
    const carritoActualizado = carrito.map( guitarraState => {
    if(guitarraState.id === guitarra.id ) {
      guitarraState.cantidad = guitarra.cantidad
    } 
    return guitarraState
  })

  window.localStorage.setItem('carrito', JSON.stringify( carritoActualizado ));
}