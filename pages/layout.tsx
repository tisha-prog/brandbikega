import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookSquare, FaHeart, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiXMark } from "react-icons/hi2";
import { useRouter } from 'next/router'

export default function Layout(props: { children: React.ReactNode }) {
    // children
    const { children } = props

    // header nav
    const [navMobileMenu, setNavMobileMenu] = useState(false);
    const router = useRouter()
    const navMobileMenuHandler = () => {
        setNavMobileMenu(!navMobileMenu);
    }

    // footer navlinks
    const navLinks = [
        {
            title: 'Home',
            href: '/'
        }
        ,
        {
            title: 'Brand',
            href: '#brand'
        },
        {
            title: 'Creaters',
            href: '/creaters'
        },
        {
            title: 'About',
            href: '#about'
        },
        {
            title: 'Contact',
            href: '#contact'
        }
    ]

    // footer social links
    const footerSocial = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/',
            icon: <FaFacebookSquare className={styles.footerSocialIcon} />,
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/',
            icon: <FaInstagramSquare className={styles.footerSocialIcon} />,
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/',
            icon: <FaTwitterSquare className={styles.footerSocialIcon} />,
        },
        {
            name: 'Youtube',
            url: 'https://www.youtube.com/',
            icon: <FaYoutubeSquare className={styles.footerSocialIcon} />,
        },
    ]

    // footer Quick Links
    const footerLinks = [
        {
            title: 'Quick Links',
            links: [
                {
                    name: 'Home',
                    url: '/',
                },
                {
                    name: 'About',
                    url: '/about',
                },
                {
                    name: 'Creaters',
                    url: '/creaters',
                },
                {
                    name: 'Contact',
                    url: '/contact',
                },
            ]
        },
        {
            title: 'Useful Links',
            links: [
                {
                    name: 'Privacy Policy',
                    url: '/privacy-policy',
                },
                {
                    name: 'Terms & Conditions',
                    url: '/terms-conditions',
                },
            ]
        },
    ]


    // footer visit address
    const visit = [
        {
            title: 'Visit',
            street: '1234 Street Name',
            city: 'City Name',
            state: 'State Name',
            zip: '12345',
        }
    ]

    return (
        <>
            {/* header section */}
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    </Link>
                </div>
                <div className={navMobileMenu ? styles.navLinksActive : styles.navLinks}>
                    {navLinks.map((link, index) => (
                        <Link key={index} href
                            ={router.pathname != '/' ? link.href.replace('#', '/') : link.href} className={styles.navLinksItem}>{link.title}
                        </Link>

                    ))}
                </div>
                <div className={styles.hamburger} onClick={navMobileMenuHandler}>
                    <button className={styles.navMobileMenu} onClick={navMobileMenuHandler}>
                        {navMobileMenu ? <HiXMark className={styles.navMobileMenuIcon} /> : <FaBars className={styles.navMobileMenuIcon} />}
                    </button>
                </div>
            </nav>
            {/* main section */}
            {children}
            {/* footer section */}
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
                                {footerSocial.map((social, index) => (
                                    <li className={styles.footerSocialItem} key={index}>
                                        <a href={social.url
                                        } target="_blank">{social.icon}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.footerLinks}>
                            {footerLinks.map((footerLink, index) => (
                                <div className={styles.footerLinksInner} key={index}>
                                    <span className={styles.footerLinksTitle}>
                                        {footerLink.title}
                                    </span>
                                    <ul className={styles.footerLinksList}>
                                        {footerLink.links.map((link, index) => (
                                            <li className={styles.footerLinksListItem} key={index}>
                                                <Link href={link.url
                                                }>{link.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <div className={styles.footerLinksInner}>
                                <span className={styles.footerLinksTitle}>
                                    {visit[0].title}
                                </span>
                                <ul className={styles.footerLinksList}>
                                    <address className={styles.footerAddress}>
                                        <p>
                                            {visit[0].street}
                                            <br />
                                            {visit[0].city},
                                            <br />
                                            {visit[0].state},
                                            <br />
                                            {visit[0].zip}
                                        </p>
                                    </address>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* footer made */}
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