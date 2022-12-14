import { motion } from 'framer-motion'

export default function Vision() {
  const motions = {
    hidden: {
      x: -800,
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

  return (
    <motion.div className="space-y-9"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 1}}
      transition={{staggerChildren: 0.2}}
    >
      <motion.h2 className="block-title" variants={motions}>願景</motion.h2>
      <motion.p className="block-description text-description" variants={motions}>
        這裏是一個 “包容” 、 “和諧” 與 “共同學習” 的學會， 能凝聚一班對資訊科技感興趣的同學， 大家互相認識， 互相支持，使艱辛的學習旅途不再孤單。 同學們也可以在這裡發揮自己的特長，與志趣相投的同學一起實現各種有趣的項目。
      </motion.p>
      <motion.p className="block-description text-description" variants={motions}>
        同時亦希望同學能體驗各方各面的資訊科技， 從中清晰自己的就業方向。 從踏上it第一步，到擁抱未來更好的自己。
      </motion.p>
    </motion.div>
  )
}
