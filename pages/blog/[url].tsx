import Image from "next/image"
import Layout from "../../components/layout"
import { formatearFecha } from "@/utils/helper"
import styles from '../../styles/blog.module.css'
import { Posts } from "@/types/blogTypes"
import { GetServerSideProps } from "next"
import { getPost } from "@/lib/posts.server"

export default function Post({posts}: Posts) {

   const {titulo,imagen, publishedAt, contenido } = posts[0].attributes

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

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {url}: any = context.query
    const post = await getPost(url)
    return {
        props: {
            posts: post.data
        }
    }
}