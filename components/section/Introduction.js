import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Introduction() {
  const motions = {
    hidden: {
      x: 800,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
      }
    },
  }

  const watermarkMotions = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      }
    },
  }

  return (
    <motion.div className="relative space-y-9 z-10 translate-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 1}}
      transition={{staggerChildren: 0.2}}
    >
      <motion.h2 className="block-title" variants={motions}>
        澳門大學學生會電腦學會
      </motion.h2>
      <motion.p className="block-description text-description" variants={motions}>
        以電腦科技為主題的學會，透過形形色色的活動提升電腦系同學的歸屬感及團體精神。並且設計容易上手的工作坊讓所有科系的同學們都可以了解和學會新興的科技軟件去更好的裝備自己。
      </motion.p>

      {/* Watermark */}
      <motion.img 
        className='absolute w-[250px] h-[250px] -top-[180px] md:-top-[250px] -right-[100px] md:bottom-0 md:right-0 md:w-[300px] md:h-[300px] dark:hidden animate-wiggle'
        src={'/logo-watermark.svg'} 
        style={{zIndex: -1}}
        variants={watermarkMotions}
      />
      <motion.img 
        className='hidden absolute w-[250px] h-[250px] -top-[180px] md:-top-[250px] -right-[100px] md:bottom-0 md:right-0 md:w-[300px] md:h-[300px] dark:block animate-wiggle'
        src={'/logo-watermark-dark.svg'} 
        style={{zIndex: -1}}
        variants={watermarkMotions}
      />
    </motion.div>
  )
}
