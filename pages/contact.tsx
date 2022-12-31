import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Meta from './Meta'

export default function Contact() {
  return (
    <>
      <Meta title="Contact" keywords="brandbikega, brand, bike, ga, contact" description="brandbikega is a brand bike ga" />
      <main className={styles.main}>
        <h1>Contact</h1>
      </main>
    </>
  )
}
