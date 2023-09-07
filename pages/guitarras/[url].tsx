import Image from 'next/image'
import styles from '../../styles/guitarras.module.css'
import Layout from "../../components/layout"
import { Guitarras, Guitarra } from '@/types/guitarraTypes'
import { GetStaticPaths, GetStaticProps} from 'next'
import { getGuitarra, getGuitarras } from '@/lib/guitarras.server'


export default function Producto({guitarras}: Guitarras) {

    const { nombre, descripcion, imagen, precio} = guitarras[0].attributes

    return (
        <Layout
            title={`Guitarra ${nombre}`}
            description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
        >
            <div className={styles.guitarra}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                </div>
            </div>
        </Layout>
    )
}

/* export const getStaticPaths: GetStaticPaths = async () => {
    const guitarras = await getGuitarras()

    const paths = guitarras.data.map((guitarra: Guitarra) => ({
        params: {
            url: guitarra.attributes.url
        }
    }))
    return {
        paths, 
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params:{url}}) =>  {
    const guitarra = await getGuitarra(url)
    return {
        props: {
            guitarra
        }
    }
}
 */
