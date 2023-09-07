import Image from "next/image"
import Layout from "../../components/layout"
import { formatearFecha } from "@/utils/helper"
import styles from '../../styles/blog.module.css'
import { Posts } from "@/types/blogTypes"

export default function Post({posts}: Posts) {

    const { titulo,contenido, imagen, publishedAt} = posts[0].attributes

    return (
        <Layout
            title={titulo}
            description="Blog de GuitarLA"
        >
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={imagen.data.attributes.url} width={1000} height={600} alt={`imagen blog ${titulo}`} />

                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </Layout>
    )
}


/* export async function getServerSideProps({query: {url }}) {
    const post = await getPost(url)
    return {
        props: {
            post
        }
    }
} */