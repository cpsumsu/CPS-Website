import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header({carousel, currentIndex}) {
  const motions = {
    hidden: {
      y: 300,
      opacity: 0,
      scale: 1
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
    }
  }

  const titleMotions = {
    visible: {
      rotate: [0, 1, 0, -1, 0, 1, 0, -1, 0],
      transition: {
        duration: 0.5
      },
    },
  }

  const [firstEntered, setFirstEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstEntered(true);
    }, 1000);
  }, []);

  return (
    <motion.div key={carousel[currentIndex].id} className="absolute top-1/3 px-8 md:px-20 left-0 right-0 z-50 space-y-4 width-wrapper"
      initial="hidden" animate="visible" variants={firstEntered ? titleMotions : motions} transition={{
        delay: 0.5,
        duration: 1
      }}>
        <motion.h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-white'>{carousel[currentIndex].title}</motion.h1>
        <motion.p className='text-lg md:text-2xl lg:text-3xl font-bold text-subHeader'>{carousel[currentIndex].description}</motion.p>
    </motion.div>
  )
}
