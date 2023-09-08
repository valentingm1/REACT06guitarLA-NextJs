import Image from "next/image";
import styles from "../../styles/guitarras.module.css";
import Layout from "../../components/layout";
import { Guitarra, Guitarras} from "@/types/guitarraTypes";
import { GetServerSideProps } from "next";
import { getGuitarra } from "@/lib/guitarras.server";
import { useState } from "react";
import { agregarCarrito } from "@/modules/carritoFunciones";

const Producto = ({ guitarras }: Guitarras) => {

  const [cantidad, setCantidad] = useState(0);
 

  const { nombre, descripcion, imagen, precio } = guitarras[0].attributes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("Se debe seleccionar una cantidad");
      return;
    }
    alert("Se agregó tu producto al carrito");
    const guitarraSeleccionada: Guitarra = {
      id: guitarras[0].id,
      attributes: {
        imagen: imagen.data.attributes.url,
        nombre,
        precio,
      },
      cantidad: cantidad
    };

    agregarCarrito(guitarraSeleccionada);

  };



  return (
    <Layout
      title={`Guitarra ${nombre}`}
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
    >
      <div className={styles.guitarra}>
        <Image
          src={imagen.data.attributes.url}
          width={600}
          height={400}
          alt={`Imagen guitarra ${nombre}`}
        />

        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label htmlFor="cantidad">Cantidad</label>
            <select
              name="cantidad"
              id="cantidad"
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            >
              <option value="0">Seleccionar Cantidad</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <input type="submit" value="Agregar al carrito" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { url }: any = context.query;
  const guitarra = await getGuitarra(url);
  return {
    props: {
      guitarras: guitarra.data,
    },
  };
};




export default Producto;