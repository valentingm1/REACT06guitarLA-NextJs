import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "@/utils/helper";
import styles from "../styles/blog.module.css";
import { Post } from "@/types/blogTypes";

export default function Post({ attributes }: Post) {
  const { contenido, imagen, titulo, url, publishedAt } = attributes;

  return (
    <article>
      <Link className={styles.enlace} href={`/blog/${url}`}>
        <Image
          src={imagen.data.attributes.formats.medium.url}
          width={600}
          height={400}
          alt={`imagen blog ${titulo}`}
        />
      </Link>

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link className={styles.enlace} href={`/blog/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}
