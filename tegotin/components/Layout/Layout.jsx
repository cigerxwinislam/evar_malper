import Head from 'next/head';
import Footer from './Footer';
import styles from './Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Êvar</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Edebiyat ve felsefe psikoloji"
        />
        <meta property="og:title" content="Êvar" />
        <meta
          property="og:description"
          content="Edebiyat ve felsefe ,psikoloji"
        />
        <meta
          property="og:image"
          content="https://3.bp.blogspot.com/-GKnSpUd0yc8/VpHb0wjxBJI/AAAAAAAAA6M/C_dCx0Htyns/s1600/ahmede-xane-%25C5%259Fiirleri.jpg"
        />
      </Head>
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
