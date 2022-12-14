/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../typings'


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Hi my names Christopher Doyle', 
                'Guy-who-loves-basketball.tsx', 
                '<ButLovesToCodeMore />',
        ], 
        loop: true,
        delaySpeed: 2000,
    })
    
    return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
         <BackgroundCircles />
         <img 
         className='relative rounded-full h-32 w-32 mx-auto object-cover'
         src="https://media-exp1.licdn.com/dms/image/C4D03AQEaIm3Uh8vtsQ/profile-displayphoto-shrink_200_200/0/1638992085132?e=1672272000&v=beta&t=D9M40LABYCSBO4RN5k2Fgs4REnr6nTLs1CMlbRydqSg" 
         alt='' 
         /> 

       <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='green' />
        </h1>

        <div className='pt-5'>
           <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
         </Link>
         <Link href='projects'>
            <button className='heroButton'>Projects</button>
         </Link>
        </div>
      </div>
    </div>
    )
}