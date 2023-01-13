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
      viewport={{once: true, amount: 0.2}}
      transition={{staggerChildren: 0.15}}
    >
      <motion.h2 className="block-title" variants={motions}>願景</motion.h2>
      <motion.p className="block-description text-description" variants={motions}>
        這裏是一個 “包容” 、 “和諧” 與 “共同學習” 的學會， 能凝聚一班對資訊科技感興趣的同學， 大家互相認識， 互相支持，使艱辛的學習旅途不再孤單。 同學們也可以在這裡發揮自己的特長，與志趣相投的同學一起實現各種有趣的項目。
      </motion.p>
      <motion.p className="block-description text-description" variants={motions}>
        同時亦希望同學能體驗各方各面的資訊科技， 從中清晰自己的就業方向。 從踏上it第一步，到擁抱未來更好的自己。
      </motion.p>

      {/* Watermark */}
      <motion.img 
        className='absolute w-[250px] h-[250px] -top-[150px] md:-top-[250px] -left-[100px] md:bottom-0 md:left-0 md:w-[300px] md:h-[300px] dark:hidden animate-wiggle'
        src={'/watermarks/vision-watermark.svg'} 
        style={{zIndex: -1}}
        variants={watermarkMotions}
      />
      <motion.img 
        className='hidden absolute w-[250px] h-[250px] -top-[150px] md:-top-[250px] -left-[100px] md:bottom-0 md:left-0 md:w-[300px] md:h-[300px] dark:block animate-wiggle'
        src={'/watermarks/vision-watermark-dark.svg'} 
        style={{zIndex: -1}}
        variants={watermarkMotions}
      />
    </motion.div>
  )
}
