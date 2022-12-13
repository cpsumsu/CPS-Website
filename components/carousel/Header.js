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

  return (
    <motion.div className="absolute top-1/3 px-8 md:px-20 left-0 right-0 z-50 space-y-4 width-wrapper"
      initial="hidden" animate="visible" variants={motions} transition={{
        delay: 1.5,
        duration: 1
      }}>
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-white'>{carousel[currentIndex].title}</h1>
        <p className='text-lg md:text-2xl lg:text-3xl font-bold text-subHeader'>{carousel[currentIndex].description}</p>
    </motion.div>
  )
}
