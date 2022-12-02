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
`;
const FooterLinks = styled.div`
    padding-bottom:30px;
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
                <Link href="/matt"><a> Ma.tt </a></Link>
                <Link href="/wporg"><a> WP Org </a></Link>
                <Link href="/wptest"><a> WP Tests </a></Link>
                <Link href="/developerwp"><a> Developer WP </a></Link>
                <Link href="/wpvip"><a> WP VIP </a></Link>
                <Link href="/wptavern"><a> WP Tavern </a></Link>
                <Link href="/gutenbergtimes"><a> Gutenberg Times </a></Link>
                <Link href="/wpmayor"><a> WP Mayor </a></Link>
                <Link href="/torquemag"><a> Torque Mag </a></Link>
                <Link href="/wpmainline"><a> WP Mainline </a></Link>
                <Link href="/techcrunch"><a> Tech Crunch </a></Link>
                <Link href="/csstricks"><a> CSS Tricks </a></Link>
                <Link href="/ollie"><a> OllieWP </a></Link>
                <Link href="/businessbloomer"><a> Business Bloomer </a></Link>
                <Link href="/richtabor"><a> Rich Tabor </a></Link>
                <Link href="/masterwp"><a> Master WP </a></Link>
                <Link href="/poststatus"><a> Post Status </a></Link>
            </LinksWrapper>
        </main>
        <FooterLinks>
            <nav>
                <Link href="/product-company"><a>Product Company</a></Link>
            </nav>
        </FooterLinks>
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
