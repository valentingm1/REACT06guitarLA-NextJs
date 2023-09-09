import Layout from "@/components/layout";
import styles from "../styles/carrito.module.css";
import { Guitarra } from "@/types/guitarraTypes";
import { eliminarProducto,actualizarCantidad} from "@/modules/carritoFunciones"; 
import {useEffect, useState} from "react"


function Carrito() {

    const [total, setTotal] = useState(0);
    const carrito: Guitarra[] = typeof window !== 'undefined' ?  JSON.parse(localStorage.getItem("carrito") || "[]") : [] 

    useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [])
    
    useEffect(() => {
        const calcTotal = carrito.reduce(
          (total, producto) => total + producto.attributes.precio * producto.cantidad,
          0
        );
        setTotal(calcTotal);
      }, [carrito]);
    

  return (
    <Layout title="Carrito de Compras" description="GuitarLA - Carrito">
      <main className="contenedor">
        <h1 className="heading">Carrito</h1>
        <div className={styles.contenido}>
          <div className={styles.carrito}>
            <h2>Artículos</h2>

            {carrito?.length === 0
              ? "Carrito vacío"
              : carrito?.map((producto) => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <img
                        src={producto.attributes.imagen}
                        alt={`Imagen del producto ${producto.attributes.nombre}`}
                      />
                    </div>
                    <div>
                      <p className={styles.nombre}>
                        {producto.attributes.nombre}
                      </p>
                      <select
                        className={styles.select}
                        value={producto.cantidad}
                          onChange={(e) =>
                          actualizarCantidad({
                          cantidad: +e.target.value,
                          id: producto.id,
                          attributes: producto.attributes
                        })
                      } 
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p className={styles.precio}>
                        $ <span>{producto.attributes.precio}</span>
                      </p>

                      <p className={styles.subtotal}>
                        Subtotal: ${" "}
                        <span>
                          {producto.attributes.precio * producto.cantidad}
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className={
                        styles.btn_eliminar
                      }  onClick={() => eliminarProducto(producto.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>

          <aside className={styles.resumen}>
            <h3>Resumen del pedido</h3>
            <p>Total a pagar: ${total}</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}

export default Carrito;
