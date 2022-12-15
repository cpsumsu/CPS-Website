import ProgressBar from './ProgressBar'
import { motion } from 'framer-motion'

export default function ProgressBars({carousel, currentIndex, progressBar, clickHandler}) {
  const motions = {
    hidden: {
      y: 400,
      opacity: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  return (<>
    {/* Progress Bar */}
    <div className="absolute w-full z-20 px-8 md:px-20 bottom-20 md:bottom-[15%] left-1/2 -translate-x-1/2 width-wrapper">
      <motion.ul className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6" initial="hidden" animate="visible" variants={motions}>
        {carousel.map(item => {
          return (
            <ProgressBar key={item.id} item={item} currentIndex={currentIndex} progressBar={progressBar} clickHandler={clickHandler} />
          )
        })}
      </motion.ul>
    </div>
  </>)
}
