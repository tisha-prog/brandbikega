import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from "./Meta";
import Nav from "./nav";
import { FaYoutubeSquare } from 'react-icons/fa';
import Footer from './footer';

export default function Creaters() {
  return (
    <>
      <Meta title="Creaters" keywords="brandbikega, brand, bike, ga, creaters" description="brandbikega is a brand bike ga" />
      <Nav />
      <section className={styles.creatersHero}>
        <div className={styles.creatersHeroText}>
          <h1>Creaters</h1>
          <p>brandbikega is a brand bike ga</p>
        </div>
        <div className={styles.wavesCreaters}>
          <Image src="/wavescreaters.svg" alt="Waves" width={1920} height={200} className={styles.wavesCreatersImg} />
        </div>
      </section>
      <section className="creaters" id="creaters">
        <div className={styles.creatersInner}>
          <div className={styles.creatersHeading}>
            <h2 className={styles.creatersHeadingTitle}>
              Our Creaters
            </h2>
            <p className={styles.creatersHeadingText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
          </div>
          <div className={styles.creatersCards}>
            <div className={styles.creatersCard}>
              <div className={styles.creatersCardImgDiv}>
                <Image src="/creater.png" alt="creater1" width={300} height={300} className={styles.creatersCardImg} />
              </div>
              <div className={styles.creatersCardInfo}>
                <div className="">
                  <span className={styles.creatersCardInfoName}>
                    John Doe
                  </span>
                  <p className={styles.creatersCardInfoTitle}>CEO</p>
                </div>
                <div className={styles.creatersCardInfoSocial}>
                  <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutubeSquare className={styles.creatersCardInfoSocialIcon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.creatersCard}>
              <div className={styles.creatersCardImgDiv}>
                <Image src="/creater.png" alt="creater1" width={300} height={300} className={styles.creatersCardImg} />
              </div>
              <div className={styles.creatersCardInfo}>
                <div className="">
                  <span className={styles.creatersCardInfoName}>
                    John Doe
                  </span>
                  <p className={styles.creatersCardInfoTitle}>CEO</p>
                </div>
                <div className={styles.creatersCardInfoSocial}>
                  <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutubeSquare className={styles.creatersCardInfoSocialIcon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.creatersCard}>
              <div className={styles.creatersCardImgDiv}>
                <Image src="/creater.png" alt="creater1" width={300} height={300} className={styles.creatersCardImg} />
              </div>
              <div className={styles.creatersCardInfo}>
                <div className="">
                  <span className={styles.creatersCardInfoName}>
                    John Doe
                  </span>
                  <p className={styles.creatersCardInfoTitle}>CEO</p>
                </div>
                <div className={styles.creatersCardInfoSocial}>
                  <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutubeSquare className={styles.creatersCardInfoSocialIcon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.creatersCard}>
              <div className={styles.creatersCardImgDiv}>
                <Image src="/creater.png" alt="creater1" width={300} height={300} className={styles.creatersCardImg} />
              </div>
              <div className={styles.creatersCardInfo}>
                <div className="">
                  <span className={styles.creatersCardInfoName}>
                    John Doe
                  </span>
                  <p className={styles.creatersCardInfoTitle}>CEO</p>
                </div>
                <div className={styles.creatersCardInfoSocial}>
                  <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutubeSquare className={styles.creatersCardInfoSocialIcon} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.creatersCard}>
              <div className={styles.creatersCardImgDiv}>
                <Image src="/creater.png" alt="creater1" width={300} height={300} className={styles.creatersCardImg} />
              </div>
              <div className={styles.creatersCardInfo}>
                <div className="">
                  <span className={styles.creatersCardInfoName}>
                    John Doe
                  </span>
                  <p className={styles.creatersCardInfoTitle}>CEO</p>
                </div>
                <div className={styles.creatersCardInfoSocial}>
                  <a href="https://www.youtube.com/" target="_blank">
                    <FaYoutubeSquare className={styles.creatersCardInfoSocialIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}