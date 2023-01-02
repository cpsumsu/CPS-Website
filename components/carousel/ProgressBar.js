import { motion } from 'framer-motion'

export default function ProgressBar({item, currentIndex, progressBar, clickHandler}) {
  const childMotions = {
    hidden: {
      y: 400,
      opacity: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
    }
  }

  return (
    <motion.li key={item.id} onClick={() => clickHandler(item.id)} className={`col-span-1 w-full cursor-pointer group disable-mobile-press-highlight`}
    variants={childMotions} transition={{duration: 1, delay: 0.8 + 0.1 * (item.id)}}>
      <h3 className={`text-lg md:text-2xl font-bold group-hover:text-white ${currentIndex === item.id ? 'text-white' : 'text-gray-400'}`}>{item.title}</h3>
      <div className={`w-full h-1 md:h-2 bg-neutral-500 transition duration-200 overflow-hidden`}>
        {
          currentIndex === item.id &&
          <div className="h-full bg-sky-900" style={{ width: `${progressBar}%` }}></div>
        }
      </div>
    </motion.li>
  )
}
