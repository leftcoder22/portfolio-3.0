/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src='https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/307378755_464891822328749_6051458998901244055_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9m4nKGdMTscAX_h_3dW&_nc_ht=scontent-sin6-3.xx&oh=00_AT_abCVUOiiKtUOU-_QqoRWFv1AUSxjXPT4iBbTSXYqdiQ&oe=635B82A9' 
            alt=''
            />

            <div>
                <h4 className='text-4xl font-light'>Mobile/Web Developer</h4>
                <p className='font-bold text-2xl mt-1'>Diotech</p>
                <div className='flex space-x-2 my-2'>
                <img 
                    className='h-10 w-10'
                    src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png' 
                    alt=''
                    />

                <img 
                    className='h-10 w-10'
                    src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png' 
                    alt=''
                    />

                <img 
                    className='h-10 w-10'
                    src='https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png' 
                    alt=''
                    />

                </div>
                <p className='uppercase py-5 text-gray-300'>Started 2018 ... Ended 2021</p>

                <ul className='list-disc space-y-10 ml-5 text-lg'>
                    <li>Managed Clent Projects</li>
                    <li>Designed User Interface and Implemented Features</li>
                    <li>Created web app for local businesses in Brooklyn, NY</li>
                    <li>Collaborated with product team to understand requirements and business specifications</li>
                </ul>
            </div>
    </article>

    
  )
}