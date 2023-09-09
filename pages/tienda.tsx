import Layout from "../components/layout"
import GuitarraComponent from "../components/guitarra"
import styles from '../styles/grid.module.css'
import { GetStaticProps } from "next"
import { Guitarra, Guitarras } from "@/types/guitarraTypes"
import { getGuitarras } from "@/lib/guitarras.server"


const Tienda = ({guitarras}: Guitarras) => {
  return (
    <Layout
      title={'Tienda Virtual'}
      description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA"
    >
        <main className="contenedor">
            <h1 className="heading">Nuestra Colección</h1>

            <div className={styles.grid}>
               {guitarras?.map((guitarra: Guitarra) => (
                  <GuitarraComponent
                      key={guitarra.id}
                      attributes={guitarra.attributes}
                      cantidad={guitarra.cantidad}
                  />
              ))}   
            </div>
        </main>
    </Layout>
  )
}


 export const getStaticProps: GetStaticProps = async () =>  {
     const guitarras = await getGuitarras();
     return {
       props: {
         guitarras: guitarras.data
       }
     }
 }



 export default Tienda;