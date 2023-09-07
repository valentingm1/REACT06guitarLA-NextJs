import styles from '../styles/curso.module.css'
import { Curso } from '@/types/cursoTypes'

export default function Curso({attributes}: Curso) {

    const {contenido, imagen, titulo} = attributes

    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>{`
                .curso {
                    background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url})
                }
            `}</style>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p>{contenido}</p>
                </div>
            </div>
        </section>
    )
}
