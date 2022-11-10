/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import type { GetStaticProps } from 'next'
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
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperience } from '../utils/fetchExperience'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({pageInfo, experience, projects, skills, socials}: Props) => {
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
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      projects,
      socials,
    },
  };
}; 