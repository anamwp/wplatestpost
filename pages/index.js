import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import styled from 'styled-components'
const LinksWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  @media(max-width:768px){
    grid-template-columns:repeat(2, 1fr);
    padding:15px;
  }
  a{
    border:solid 1px #ddd;
    padding:5px 15px;
    background:#f7f7f7;
    text-align:center;
    display:inline-block;
    margin:5px;
  }
`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>WordPress Latest Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          WordPress Top Blog Sites
        </h1>

        <p className={styles.description}>
          Check Latest post by clicking on individual Sites
        </p>

        <LinksWrapper>
            <Link href="/wpmayor"><a> WP Mayor </a></Link>
            <Link href="/wptavern"><a> WP Tavern </a></Link>
            <Link href="/torquemag"><a> Torque Mag </a></Link>
            <Link href="/gutenbergtimes"><a> Gutenberg Times </a></Link>
            <Link href="/woocommerce"><a> WooCommerce </a></Link>
            <Link href="/techcrunch"><a> Tech Crunch </a></Link>
            <Link href="/themeum"><a> Themeum </a></Link>
            <Link href="/wedevs"><a> weDevs </a></Link>
            <Link href="/wpdeveloper"><a> WPDeveloper </a></Link>
            <Link href="/elementor"><a> Elementor </a></Link>
            <Link href="/csstricks"><a> CSS Tricks </a></Link>
            <Link href="/wpastra"><a> WP Astra </a></Link>
            <Link href="/thrivethemes"><a> Thrive Themes </a></Link>
            <Link href="/wpengine"><a> WP Engine </a></Link>
            <Link href="/wpmanageninja"><a> WP Manageninja </a></Link>
            <Link href="/radiustheme"><a> Radius Theme </a></Link>
            <Link href="/wpmet"><a> WP Met </a></Link>
            <Link href="/themesgrove"><a> Themesgrove </a></Link>
            <Link href="/kinsta"><a> Kinsta </a></Link>
            <Link href="/wpleaders"><a> WP Leaders </a></Link>
        </LinksWrapper>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
