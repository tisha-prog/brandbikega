import styles from '../styles/Home.module.css'
import Meta from './components/Meta';
import Layout from './layout';
import Image from 'next/image'
import Link from 'next/link'
import { SetStateAction, useState } from 'react';
import { FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';

export default function Brandbikega() {

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
      title: 'Career Expert',
    },
    {
      title: 'Education',
    },
    {
      title: 'Motivational',
    },
    {
      title: 'Technical',
    },
    {
      title: 'Vloger',
    },
  ]

  const personList = [
    {
      name: 'Yash Garg',
      image: '/images/influencer/career-expert/yash-garg.jpg',
      instagramUrl: 'https://www.instagram.com/yashgeez/',
      instagram: '15.1k',
      youtubeUrl: 'https://www.youtube.com/@YashGargOfficial',
      youtube: '150k',
      category: 'Career Expert',
    },
    {
      name: 'Inshan Sharma',
      image: '/images/influencer/career-expert/inshan-sharma.jpg',
      instagramUrl: 'https://www.instagram.com/ishansharma7390/',
      instagram: '157k',
      youtubeUrl: 'https://www.youtube.com/@IshanSharma7390',
      youtube: '656k',
      category: 'Career Expert',
    },
    {
      name: 'Love Babbar',
      image: '/images/influencer/career-expert/love-babbar.jpg',
      instagramUrl: 'https://www.instagram.com/lovebabbar1/',
      instagram: '75.4k',
      youtubeUrl: 'https://www.youtube.com/@LoveBabbar',
      youtube: '483k',
      category: 'Career Expert',
    },
    {
      name: 'Fraz Mohammad',
      image: '/images/influencer/career-expert/fraz-mohammad.jpg',
      instagramUrl: 'https://www.instagram.com/frazmohammad/',
      instagram: '30k',
      youtubeUrl: 'https://www.youtube.com/@FrazMohammad/',
      youtube: '222k',
      category: 'Career Expert',
    },
    {
      name: 'Dear Sir',
      image: '/images/influencer/education/dear-sir.jpg',
      instagramUrl: 'https://www.instagram.com/dearsirofficial/',
      instagram: '220k',
      youtubeUrl: 'https://www.youtube.com/@DearSir',
      youtube: '14.4m',
      category: 'Education',
    },
    {
      name: 'English Lovers',
      image: '/images/influencer/education/english-lovers.jpg',
      instagramUrl: 'https://www.instagram.com/englishloversno1/',
      instagram: '101k',
      youtubeUrl: 'https://www.youtube.com/@EnglishLoversno1/',
      youtube: '2.64m',
      category: 'Education',
    },
    {
      name: 'English Connection',
      image: '/images/influencer/education/english-connection.jpg',
      instagramUrl: 'https://www.instagram.com/englishconnectionbykanchan/',
      instagram: '359k',
      youtubeUrl: 'https://www.youtube.com/@EnglishLoversno1/',
      youtube: '2.64m',
      category: 'Education',
    },
    {
      name: 'Sartaz Classes',
      image: '/images/influencer/education/sartaz-classes.jpg',
      instagramUrl: 'https://www.instagram.com/sartazclasses/',
      instagram: '262k',
      youtubeUrl: 'https://www.youtube.com/@SartazClasses',
      youtube: '2.6m',
      category: 'Education',
    },
    {
      name: 'Arvind Arora',
      image: '/images/influencer/motivational/arvind-arora.jpg',
      instagramUrl: 'https://www.instagram.com/arvind.aroraj/',
      instagram: '687k',
      youtubeUrl: 'https://www.youtube.com/@A2Motivation',
      youtube: '14.3m',
      category: 'Motivational',
    },
    {
      name: 'Himeesh Madaan',
      image: '/images/influencer/motivational/himeesh-madaan.jpg',
      instagramUrl: 'https://www.instagram.com/himeeshmadaan/',
      instagram: '271k',
      youtubeUrl: 'https://www.youtube.com/@himeeshmadaan',
      youtube: '6.52m',
      category: 'Motivational',
    },
    {
      name: 'Ujjwal Patni',
      image: '/images/influencer/motivational/ujjwal-patni.jpg',
      instagramUrl: 'https://www.instagram.com/ujjwalpatniofficial/',
      instagram: '342k',
      youtubeUrl: 'https://www.youtube.com/@UjjwalPatni',
      youtube: '6.48m',
      category: 'Motivational',
    },
    {
      name: 'Mahendra Dogney',
      image: '/images/influencer/motivational/mahendra-dogney.jpg',
      instagramUrl: 'https://www.instagram.com/mahendradogneofficial/',
      instagram: '997k',
      youtubeUrl: 'https://www.youtube.com/@MahendraDogneyLifecoach',
      youtube: '3.12m',
      category: 'Motivational',
    },
    {
      name: 'Armaan Zunaid',
      image: '/images/influencer/technical/armaan-zunaid.jpg',
      instagramUrl: 'https://www.instagram.com/armaan_zunaid/',
      instagram: '57k',
      youtubeUrl: 'https://www.youtube.com/@junnukitech',
      youtube: '1.36m',
      category: 'Technical',
    },
    {
      name: 'Mahatma Ji Technical',
      image: '/images/influencer/technical/mahatmaji-technical.png',
      instagramUrl: 'https://www.instagram.com/mahatmaji_technical/',
      instagram: '91.8k',
      youtubeUrl: 'https://www.youtube.com/@MahatmajiTechnical',
      youtube: '6.74m',
      category: 'Technical',
    },
    {
      name: 'Manoj Dey',
      image: '/images/influencer/technical/manoj-dey.jpg',
      instagramUrl: 'https://www.instagram.com/manojdey23/',
      instagram: '530k',
      youtubeUrl: 'https://www.youtube.com/@ManojDey',
      youtube: '3.74m',
      category: 'Technical',
    },
    {
      name: 'Technical Yogi',
      image: '/images/influencer/technical/technical-yogi.jpg',
      instagramUrl: 'https://www.instagram.com/technicalyogi/',
      instagram: '99.7k',
      youtubeUrl: 'https://www.youtube.com/@TechnicalYogi',
      youtube: '1.7m',
      category: 'Technical',
    },
    {
      name: 'Anshu Bisht',
      image: '/images/influencer/vloger/anshu-bisht.jpg',
      instagramUrl: 'https://www.instagram.com/gamerfleetog/',
      instagram: '1m',
      youtubeUrl: 'https://www.youtube.com/@AnshuBisht',
      youtube: '3.67m',
      category: 'Vloger',
    },
    {
      name: 'Curly Tales',
      image: '/images/influencer/vloger/curly-tales.jpg',
      instagramUrl: 'https://www.instagram.com/curly.tales/',
      instagram: '920k',
      youtubeUrl: 'https://www.youtube.com/@curlytalesdigital',
      youtube: '1.95m',
      category: 'Vloger',
    },
    {
      name: 'Paras Thakral',
      image: '/images/influencer/vloger/para-thakral.jpg',
      instagramUrl: 'https://www.instagram.com/theparasthakral/',
      instagram: '364k',
      youtubeUrl: 'https://www.youtube.com/@parasthakralvlogs6489',
      youtube: '2.07m',
      category: 'Vloger',
    },
    {
      name: 'Priyanka Vlogs',
      image: '/images/influencer/vloger/priyanka-vlogs.jpg',
      instagramUrl: 'https://www.youtube.com/@PriyankaVlogs_',
      instagram: '122k',
      youtubeUrl: 'https://www.youtube.com/@PriyankaVlogs_',
      youtube: '493k',
      category: 'Vloger',
    },
  ]

  return (
    <>
      <Layout>
        {/* meta default */}
        <Meta />
        {/* hero section */}
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
        {/* about us section */}
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
        {/* brand / feature section */}
        <section className={styles.brand} id="brand">
          <div className={styles.brandInner}>
            <div className={styles.brandHeading}>
              <h2>Lorem ipsum dolor sit amet consectetur</h2>
            </div>
            <div className={styles.brandContent}>
              <div className={styles.brandContentCategory}>
                <ul className={styles.brandContentCategoryList}>
                  {categoryList.map((category, index) => (
                    <li className={styles.brandContentCategoryListItem + " " + (isCategory === index ? styles.active : '')} key={index} onClick={() => setIsCategory(index)}>
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
                      } width={500} height={500} className={styles.brandContentListItemImage} alt={person.name} />
                      <ul className={styles.brandContentListItemImageBoxSocial} style={{ display: isHovered === index ? 'flex' : 'none' }}>
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
        {/* contact us section */}
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
      </Layout>
    </>
  )
}