"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { CardDemo } from '../ui/animated-card'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <div>
        <div className='text-[30px] mb-5 text-white font-medium mt-[10px] text-center mb-[15px]'>  
          Multi-LLM plataform
        </div>        
        <CardDemo />
      </div>
{/* <motion.div
          variants={slideInFromTop}
          className=""
        >
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            All-in-one plataform
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            Empower Your Business with the Strength of Multiple Platforms
        </motion.div> */}
    </div>
  )
}

export default SkillText