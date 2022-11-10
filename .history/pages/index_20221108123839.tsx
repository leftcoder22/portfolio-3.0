import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'

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
        <Experience />
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
    </div>
  )
}
