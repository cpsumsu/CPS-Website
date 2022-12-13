import { motion } from 'framer-motion'

export default function Introduction() {
  const motions = {
    hidden: {
      x: 800,
      opacity: 0.5
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
      }
    },
  }

  return (
    <motion.div className="space-y-9"
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
    </motion.div>
  )
}
