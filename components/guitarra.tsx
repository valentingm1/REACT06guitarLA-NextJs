import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/guitarras.module.css'
import { Guitarra } from "../types/guitarraTypes"

export default function Guitarra({attributes}: Guitarra) {
  const { descripcion, imagen, nombre, precio, url } = attributes
  return (
    <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link className={styles.enlace} href={`/guitarras/${url}`}>
                Ver Producto
            </Link>
        </div>
    </div>
  )
}
