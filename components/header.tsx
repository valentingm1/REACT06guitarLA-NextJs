import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={"/"}>
          <Image
            src="/img/logo.svg"
            width={300}
            height={40}
            alt="imagen logotipo"
          />
        </Link>

        <nav className={styles.navegacion}>
          <Link
            className={router.pathname === "/" ? styles.active : ""}
            href="/"
          >
            Inicio
          </Link>

          <Link
            className={router.pathname === "/nosotros" ? styles.active : ""}
            href="/nosotros"
          >
            Nosotros
          </Link>

          <Link
            href="/tienda"
            className={router.pathname === "/tienda" ? styles.active : ""}
          >
            Tienda
          </Link>

          <Link
            href="/blog"
            className={router.pathname === "/blog" ? styles.active : ""}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
