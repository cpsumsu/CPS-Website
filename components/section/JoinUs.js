import { motion } from 'framer-motion'

export default function JoinUs() {
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
      <motion.h2 className="block-title" variants={motions}>加入我們</motion.h2>
      <motion.p className="block-description text-description" variants={motions}>
          我們歡迎任何科系的同學們加入到電腦學會的大家庭，讓學會融合更多元的想法和創造力，與各個內閣一起構思、實現吸引且有益的活動。利用有限的資源創造出對社會有價值的事。
      </motion.p>
      <motion.p className="block-description text-description" variants={motions}>
          除此之外，我們也積極地組織開發小組，希望通過使用基礎和貼近最前緣的電腦技術與協同開發實用的項目，令各個成員都能夠實現自我成長。甚至一起創建一個對電腦技術有興趣的本地社群。
      </motion.p>

      {/* Watermark */}
      <motion.img 
        className='absolute w-[250px] h-[250px] -top-[180px] md:-top-[250px] -right-[100px] md:bottom-0 md:right-0 md:w-[300px] md:h-[300px] dark:hidden animate-wiggle'
        src={'/joinus-watermark.svg'} 
        style={{zIndex: -1}}
        variants={watermarkMotions}
      />
      <motion.img 
        className='hidden absolute w-[250px] h-[250px] -top-[180px] md:-top-[250px] -right-[100px] md:bottom-0 md:right-0 md:w-[300px] md:h-[300px] dark:block animate-wiggle'
        src={'/joinus-watermark-dark.svg'} 
        style={{zIndex: -1}}
        variants={watermarkMotions}
      />
    </motion.div>
  )
}
