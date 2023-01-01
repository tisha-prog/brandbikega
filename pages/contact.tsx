import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Meta from './components/Meta'
import Layout from './layout'

export default function Contact() {
  return (
    <Layout>
      <Meta title="Contact" keywords="brandbikega, brand, bike, ga, contact" description="brandbikega is a brand bike ga" />
    </Layout>
  )
}
