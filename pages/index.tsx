import styles from '../styles/Home.module.css'
import Home from './home';
import Footer from './footer';
import Nav from './nav';
import Meta from './Meta';

export default function BrandBikega() {

  return (
    <>
      <Meta />
      <main className={styles.main}>
        <Nav />
        <Home />
        <Footer />
      </main>
    </>
  )
}
