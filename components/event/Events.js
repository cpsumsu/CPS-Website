import Link from "next/link"
import { motion } from "framer-motion"
import EventCards from "./EventCards"

export default function Events({events}) {
  const motions = {
    hidden: {
      y: 400,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      }
    },
  }

  return (
    <motion.div className='w-full space-y-2 md:space-y-16 translate-y-12'
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.2}}
      transition={{staggerChildren: 0.15}}
    >
      <motion.div className="flex justify-between items-baseline px-8 md:px-20" variants={motions}>
        <h2 className='text-xl md:text-3xl font-bold dark:text-white duration-300'>最近活動</h2>
        <Link href="/events" className='text-sm md:text-xl font-bold text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 duration-300'>查看更多<span>&rarr;</span></Link>
      </motion.div>
      <div className="flex w-full overflow-y-scroll scrollbar-none snap-x snap-mandatory">
        <EventCards events={events} />
      </div>
    </motion.div>

  )
}
