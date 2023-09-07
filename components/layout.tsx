import Head from "next/head"
import Header from "./header"
import Footer from "./footer" 

type Props = {      // To be fixed
    title: string,
    description: string,
    children: React.ReactNode
}

export default function Layout({children, title = '', description = ''}: Props) {
  return (
    <>
        <Head>
            <title>{`GuitarLA - ${title}`}</title>
            <meta name="description" content={description} />
        </Head>

        <Header />
        {children}
        <Footer />
    </>
  )
}
