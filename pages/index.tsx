import Layout from "../components/layout";
import GuitarraComponent from "../components/guitarra";
import PostComponent from "../components/post";
import CursoComponent from "../components/curso";
import styles from "../styles/grid.module.css";
import { Guitarra, Guitarras } from "../types/guitarraTypes";
import { Post, Posts } from "../types/blogTypes";
import { Curso } from "@/types/cursoTypes";
import { GetStaticProps } from "next";
import { getGuitarras } from "@/lib/guitarras.server";
import { getPosts } from "@/lib/posts.server";
import { getCurso } from "@/lib/curso.server";

const Home = ({
  guitarras,
  posts,
  curso,
}: {
  guitarras: Guitarras;
  posts: Posts;
  curso: Curso;
}) => {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de música, venta de guitarras y más"}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
          <div className={styles.grid}>
          {guitarras?.map((guitarra: Guitarra) => (
                  <GuitarraComponent
                      key={guitarra.id}
                      attributes={guitarra.attributes}
                  />
              ))}   
          </div>
        </main>

        {<CursoComponent attributes={curso.attributes} />}

        <section className="contenedor">
          <h2 className="heading">Blog</h2>

          <div className={styles.grid}>
          { posts?.map((post: Post) => (
                    <PostComponent
                      key={post.id}
                      attributes={post.attributes}
                    />
                ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
    const [ { data: guitarras }, {data: posts}, {data: curso} ] = await Promise.all([
      getGuitarras(),
      getPosts(),
      getCurso()
    ])

    return {
        props: {
            guitarras: guitarras,
            posts: posts,
            curso: curso
        }
    }
};

export default Home;
