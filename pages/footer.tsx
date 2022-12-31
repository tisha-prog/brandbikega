import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FaFacebookSquare, FaHeart, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
export default function Footer() {

    return (
        <>
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerExFo}>
              <div className={styles.footerDetails}>
                <span className="">
                  <Image src="/logo.png" alt="Logo" width={40} height={40} className={styles.footerLogo} />
                </span>
                <span className={styles.footerText}>
                  Social Media
                </span>
                <ul className={styles.footerSocial}>
                  <li className={styles.footerSocialItem}>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookSquare className={styles.footerSocialIcon} />
                    </a>
                  </li>
                  <li className={styles.footerSocialItem}>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagramSquare className={styles.footerSocialIcon} />
                    </a>
                  </li>
                  <li className={styles.footerSocialItem}>
                    <a href="https://twitter.com/" target="_blank">
                      <FaTwitterSquare className={styles.footerSocialIcon} />
                    </a>
                  </li>
                  <li className={styles.footerSocialItem}>
                    <a href="https://www.youtube.com/" target="_blank">
                      <FaYoutubeSquare className={styles.footerSocialIcon} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerLinks}>
                <div className={styles.footerLinksInner}>
                  <span className={styles.footerLinksTitle}>
                    Quick Links
                  </span>
                  <ul className={styles.footerLinksList}>
                    <li className={styles.footerLinksListItem}>
                      <a href="#home">Home</a>
                    </li>
                    <li className={styles.footerLinksListItem}>
                        <Link href="#about">About</Link>
                      </li>
                    <li className={styles.footerLinksListItem}><a
                      href="#services">Services</a></li>
                    <li className={styles.footerLinksListItem}><a
                      href="#contact">Contact</a></li>
                  </ul>
                </div>
                <div className={styles.footerLinksInner}>
                  <span className={styles.footerLinksTitle}>
                    Help
                  </span>
                  <ul className={styles.footerLinksList}>
                    <li className={styles.footerLinksListItem}><a
                      href="#">FAQ</a></li>
                    <li className={styles.footerLinksListItem}><a
                      href="#">Privacy Policy</a></li>
                    <li className={styles.footerLinksListItem}><a href="#">Terms
                      & Conditions</a></li>
                  </ul>
                </div>
                <div className={styles.footerLinksInner}>
                  <span className={styles.footerLinksTitle}>
                    Visit
                  </span>
                  <ul className={styles.footerLinksList}>
                    <address className={styles.footerAddress}>
                      <p>
                        102, 2nd Floor,
                        <br />
                        ABC Building,
                        <br />
                        XYZ Road,
                        <br />
                        Mumbai,
                        <br />
                        Maharashtra,
                        <br />
                        India - 400001
                      </p>
                    </address>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.footerMade}>
              <span>
                Made with<FaHeart className={styles.footerMadeIcon} />by <a href="https://github.com/sauravhathi"
                  target="_blank" className={styles.footerMadeLink}>XYZ</a>
              </span>
            </div>
          </div>
        </footer>
        </>
    )
}