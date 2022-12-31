import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiXMark } from "react-icons/hi2";
export default function Nav() {
    const [navMobileMenu, setNavMobileMenu] = useState(false);
    const navMobileMenuHandler = () => {
        setNavMobileMenu(!navMobileMenu);
    }

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

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                </div>
                <div className={navMobileMenu ? styles.navLinksActive : styles.navLinks}>
                    {navLinks.map((link, index) => (
                        <Link key={index} href
                            ={link.href} className={styles.navLinksItem}>{link.title}
                        </Link>
                    ))}

                </div>
                <div className={styles.hamburger} onClick={navMobileMenuHandler}>
                    <button className={styles.navMobileMenu} onClick={navMobileMenuHandler}>
                        {navMobileMenu ? <HiXMark className={styles.navMobileMenuIcon} /> : <FaBars className={styles.navMobileMenuIcon} />}
                    </button>
                </div>
            </nav>
        </>
    )
}