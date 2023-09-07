import Layout from "../components/layout"
import PostComponent from "../components/post"
import styles from '../styles/grid.module.css'
import { GetStaticProps } from "next"
import { Posts, Post } from "@/types/blogTypes"
import { getPosts } from "@/lib/posts.server"

const Blog = ({ posts }: Posts) => {

  return (
    <Layout
      title={'Blog'}
      description="Blog de música, venta de guitarras, consejos, GuitarLA"
    >
        <main className="contenedor">
            <h1 className="heading">Blog</h1>
            <div className={styles.grid}>
                 { posts?.map((post: Post) => (
                    <PostComponent
                      key={post.id}
                      attributes={post.attributes}
                    />
                ))}
            </div>
        </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () =>  {
    const posts = await getPosts()
    return {
      props: {
        posts: posts.data
      }
    }
} 

export default Blog;