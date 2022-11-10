/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { Experience, PageInfo, Project, Skill, Social } from "../typings"

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scollbar-thumb-[#556f3b]'> 
    
      <Head>
        <title>CJs Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className='snap-start'>
      <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>
      
      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
          <footer className='sticky bottom-5 w-full cursor-pointer'>
            <div className='flex items-center justify-center'>
              <img 
                className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                src='https://i.imgur.com/e2yvD6A.png'
                alt=''
              />
            </div>
          </footer>
      </Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {

}