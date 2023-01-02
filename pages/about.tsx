import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Meta from "./components/Meta";
import Layout from './layout';
import { SetStateAction, useState } from 'react';
import { RiFocusLine } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";

export default function About() {

  const [isHover, setIsHover] = useState(-1);
  const [isHoverAdvisor, setIsHoverAdvisor] = useState(-1);

  const coreTeam = [
    {
      name: 'Dheerendra Singh',
      profile: '/images/influencer/vloger/curly-tales.jpg',
      designation: 'Founder & CEO',
      description: 'A dynamic and effective delivery manager, who bridges the intellectual gap between customers and Business-oriented Clients, have worked on various Big Project portfolios of Government and Private Bodies within and across the Globe. Having strong network of top influencers across the country and An eloquent speaker at multiple National and International Forums.',
    },
    {
      name: 'Aviral Dwivedi',
      profile: '/images/influencer/vloger/curly-tales.jpg',
      designation: 'Founder & CEO',
      description: 'A dynamic and effective delivery manager, who bridges the intellectual gap between customers and Business-oriented Clients, have worked on various Big Project portfolios of Government and Private Bodies within and across the Globe. Having strong network of top influencers across the country and An eloquent speaker at multiple National and International Forums.',
    },
    {
      name: 'Piyush Sharma',
      profile: '/images/influencer/vloger/curly-tales.jpg',
      designation: 'Founder & CEO',
      description: 'A dynamic and effective delivery manager, who bridges the intellectual gap between customers and Business-oriented Clients, have worked on various Big Project portfolios of Government and Private Bodies within and across the Globe. Having strong network of top influencers across the country and An eloquent speaker at multiple National and International Forums.',
    },
    {
      name: 'Tisha Singh',
      profile: '/images/influencer/vloger/curly-tales.jpg',
      designation: 'Founder & CEO',
      description: 'A dynamic and effective delivery manager, who bridges the intellectual gap between customers and Business-oriented Clients, have worked on various Big Project portfolios of Government and Private Bodies within and across the Globe. Having strong network of top influencers across the country and An eloquent speaker at multiple National and International Forums.',
    },
  ]

  const advisors = [
    {
      name: 'Dr. Megha Mehta',
      profile: '/images/influencer/motivational/arvind-arora.jpg',
      designation: 'Advisor',
      description: 'Trainer and Assistant Professor. Having 10 years of experience in teaching Organizational behavior, Critical Thinking, Creativity and Innovation, Business Ethics, Human resource management, Labor laws, Security and social welfare, Organizational change and development, Competency Mapping etc.',
    },
  ]


  const partnersLogo = [
    {
      name: 'logo',
      url: 'logo1.png',
    },
    {
      name: 'logo',
      url: 'logo2.png',
    },
    {
      name: 'logo',
      url: 'logo1.png',
    },
    {
      name: 'logo',
      url: 'logo2.png',
    },
  ]
  return (
    <Layout>
      <Meta title="About" keywords="Influencer branding, Business success, Return on investment, Blogger recommendation, Millennial purchasing behavior, Influencer influence, Influencer marketing, Branding strategy" description="Influencer branding leads to business success, 14% of millennials buy on recommendation." />
      <section className={styles.brandHero + " flex justify-center items-center lg:px-16 lg:pt-[1rem] lg:pb-[1rem] px-4 md:h-screen py-[15rem]"} >
        <div className={styles.animation + " bg-white shadow-lg rounded-lg lg:max-w-6xl max-w-2xl lg:px-52 lg:py-16 px-4 py-8"}>
          <h1 className="text-center font-bold text-gray-800 lg:text-6xl text-4xl">All About Us</h1>
          <p className="text-center text-gray-600 mt-4 lg:text-2xl text-xl">Not convinced that branding with influencers can lead to real business results and high return on investment ? Here we are to prove this, It has been found that 14% of millennials bought something because a blogger or influencer recommended it.</p>
        </div>
      </section>
      <section className="lg:px-16 lg:py-8 px-0 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <div className="p-4 max-w-2xl ">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className={styles.imageBox}>
                <Image src="/mission.jpg" alt="Mission" className={styles.aboutImg} fill />
              </div>
              <div className="flex items-center mt-4 gap-2">
                <h3 className="text-2xl font-semibold text-gray-800">Vision</h3>
                <RiFocusLine className="text-3xl text-blue-500" />
              </div>
              <p className="text-gray-600 mt-2">Our vision is to use influential figures in various fields, including entertainment, technology, and career development, to effectively promote and grow our clients' brands. By partnering with talented and well-known influencers, we aim to reach a wide audience and effectively communicate the value of our clients' products or services.</p>
            </div>
          </div>
          <div className="p-4 max-w-2xl">
            <div className="bg-white shadow-lg rounded-lg p-4">
              <div className={styles.imageBox}>
                <Image src="/vision.jpg" alt="Vision" className={styles.aboutImg} fill />
              </div>
              <div className="flex items-center mt-4 gap-2">
                <h3 className="text-2xl font-semibold text-gray-800">Mission</h3>
                <FcIdea className="text-3xl text-blue-500" />
              </div>
              <p className=" text-gray-600 mt-2">Our mission is to increase brand revenue and market share through strategic planning and the use of influencers or video marketing. By leveraging the power of social media and targeted campaigns, we aim to effectively promote our clients and help them achieve their business goals.</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="">
            <h2 className="text-3xl font-bold text-white">Core Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreTeam.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 mt-4 flex flex-col" onMouseEnter={() => setIsHover(index)} onMouseLeave={() => setIsHover(-1)}>
                <div className={styles.imageBox}>
                  <Image src={item.profile
                  } alt={item.name} className={styles.teamImg + " reltive-important " + (isHover === index ? styles.grayToColor + " " + styles.transition : "")} fill />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="px-2 py-1 bg-gray-500 text-white rounded-md text-sm w-fit">{item.designation}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <div className="">
            <h2 className="text-3xl font-bold text-white">Advisors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {advisors.map((item, value) => (
              <div key={value} className="bg-white shadow-lg rounded-lg p-4 mt-4 flex flex-col" onMouseEnter={() => setIsHoverAdvisor(value)} onMouseLeave={() => setIsHoverAdvisor(-1)}>
                <div className={styles.imageBox}>
                  <Image src={item.profile
                  } alt={item.name} className={styles.teamImg + " reltive-important " + (isHoverAdvisor === value ? styles.grayToColor + " " + styles.transition : "")} fill />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="px-2 py-1 bg-gray-500 text-white rounded-md text-sm w-fit">{item.designation}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Partners &amp; Collaborators</h2>
          </div>
          <ul className={styles.partnersLogoList + " gap-4 bg-white p-4 mt-4"}>
            {partnersLogo.map((item, index) => (
              <li key={index}>
                <Image src={"/images/partners/" + item.url} alt={item.name} fill className={styles.partnersLogoListImg} />
              </li>
            ))}
          </ul>
        </div>
      </section >
    </Layout >
  )
}