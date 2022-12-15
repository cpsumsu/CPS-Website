import { motion } from 'framer-motion'

export default function ContactUs() {
  const motions = {
    hidden: {
      x: 800,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
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
      transition={{staggerChildren: 0.15}}
    >
      <motion.h2 className="block-title" variants={motions}>歡迎聯絡我們</motion.h2>
      <ul>
        <li></li>
      </ul>
    </motion.div>
  )
}
