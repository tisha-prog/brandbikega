import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaGraduationCap } from 'react-icons/fa';
import Brand from './brand';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Brand Bikega</h1>
          <p>
            Not convinced that branding with influencers can lead to real business results and high return on investment ? <br /><br />
            Here we are to prove this,
            It has been found that 14% of millennials bought something because a blogger or influencer recommended it.
          </p>
          <button><a href="#about">Learn More</a></button>
        </div>
        <div className={styles.heroImage}>
          <Image src="/hero.svg" alt="Hero" width={500} height={500} />
        </div>
        <div className={styles.waves}>
          <Image src="/wavesOpacity.svg" alt="Waves" width={1920} height={200} className={styles.wavesOpacity} />
        </div>
      </section>
      <section className={styles.about} id="about">
        <div className={styles.aboutImage}>
          <Image src="/about.jpg" alt="About" width={500} height={500} />
        </div>
        <div className={styles.aboutText}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptatum, quia, voluptas quas voluptates quibusdam
            voluptatibus quae quidem quos nemo. Quisquam, quae. Quisquam
            voluptates quibusdam voluptatibus quae quidem quos nemo.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <Brand />
      <section className={styles.contact} id="contact">
        <div className={styles.contactText}>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quod, voluptatum, quia, voluptas quas voluptates quibusdam
            voluptatibus quae quidem quos nemo. Quisquam, quae. Quisquam
            voluptates quibusdam voluptatibus quae quidem quos nemo.
          </p>
          <button><Link href="/contact">Contact Us</Link></button>
        </div>
        <div className={styles.contactImage}>
          <Image src="/contact.svg" alt="Contact" width={500} height={500} />
        </div>
      </section>
    </>
  )
}