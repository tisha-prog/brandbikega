import { SetStateAction, useState } from 'react';
import styles from '../styles/Home.module.css'
import { FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import Image from 'next/image'

export default function Brand() {
    
    const [isCategory, setIsCategory] = useState(1);
    const [isHovered, setIsHovered] = useState(-1);

    const handleMouseEnter = (index: SetStateAction<number>) => {
        setIsHovered(index);
    }

    const categoryList = [
        {
            title: 'All',
        },
        {
            title: 'Branding',
        },
        {
            title: 'Design',
        },
        {
            title: 'Photography',
        },
        {
            title: 'Web Design',
        },
    ]

    const personList = [
        {
            name: 'John Doe',
            image: '/creater.png',
            instagramUrl: 'https://www.instagram.com/',
            instagram: '1.2k',
            youtubeUrl: 'https://www.youtube.com/',
            youtube: '1.2k',
            category: 'Branding',
        },
        {
            name: 'John Dtt',
            image: '/creater.png',
            instagramUrl: 'https://www.instagram.com/',
            instagram: '1.2k',
            youtubeUrl: 'https://www.youtube.com/',
            youtube: '1.2k',
            category: 'Branding',
        },
        {
            name: 'John Doe',
            image: '/creater.png',
            instagramUrl: 'https://www.instagram.com/',
            instagram: '1.2k',
            youtubeUrl: 'https://www.youtube.com/',
            youtube: '1.2k',
            category: 'Branding',
        },
        {
            name: 'John Dtt',
            image: '/creater.png',
            instagramUrl: 'https://www.instagram.com/',
            instagram: '1.2k',
            youtubeUrl: 'https://www.youtube.com/',
            youtube: '1.2k',
            category: 'Branding',
        },
        {
            name: 'Jack Doe',
            image: '/creater.png',
            instagramUrl: 'https://www.instagram.com/',
            instagram: '1.2k',
            youtubeUrl: 'https://www.youtube.com/',
            youtube: '1.2k',
            category: 'Design',
        },
        {
            name: 'martin Doe',
            image: '/creater.png',
            instagramUrl: 'https://www.instagram.com/',
            instagram: '1.2k',
            youtubeUrl: 'https://www.youtube.com/',
            youtube: '1.2k',
            category: 'Photography',
        },
    ]

    return (
        <>
            <section className={styles.brand} id="brand">
                <div className={styles.brandInner}>
                    <div className={styles.brandHeading}>
                        <h2>Lorem ipsum dolor sit amet consectetur</h2>
                    </div>
                    <div className={styles.brandContent}>
                        <div className={styles.brandContentCategory}>
                            <ul className={styles.brandContentCategoryList}>
                                {categoryList.map((category, index) => (
                                    <li className={styles.brandContentCategoryListItem+" "+(isCategory === index ? styles.active : '')} key={index} onClick={() => setIsCategory(index)}>
                                        {category.title}
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className={styles.brandContentList}>
                        {personList.filter(person => categoryList[isCategory].title === 'All' ? person : person.category === categoryList[isCategory].title).map((person, index) => (

                                <div className={styles.brandContentListItem} key={index} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseEnter(-1)}>
                                    <div className={styles.brandContentListItemImageBox}>
                                        <Image src={person.image
                                        } alt="Creative" width={500} height={500} className={styles.brandContentListItemImage} />
                                        <ul className={styles.brandContentListItemImageBoxSocial} style={{display: isHovered === index ? 'flex' : 'none'}}>
                                            <li className={styles.brandContentListItemImageBoxSocialItem}>
                                                <a href={person.instagramUrl} target="_blank" rel="noreferrer">
                                                    <FaInstagramSquare className={styles.brandContentListItemImageBoxSocialItemIcon} /><span>{person.instagram} Followers</span>
                                                </a>
                                            </li>
                                            <li className={styles.brandContentListItemImageBoxSocialItem}>
                                                <a href={person.youtubeUrl} target="_blank" rel="noreferrer">
                                                    <FaYoutubeSquare className={styles.brandContentListItemImageBoxSocialItemIcon} /><span>{person.youtube} Subscribers</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.brandContentListItemContent}>
                                        <div className={styles.brandContentListItemContentHeading}>
                                            <h3>{person.name}</h3>
                                        </div>
                                        <div className={styles.brandContentListItemContentCategory}>
                                            <p>{person.category}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 