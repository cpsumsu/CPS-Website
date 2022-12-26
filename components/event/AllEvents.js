import Link from "next/link"
import { motion } from "framer-motion"
import EventCard from "./EventCard"

export default function AllEvents({events}) {
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

  const Cardmotions = {
    hidden: {
      y: 600,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    },
  }

  return (
    <motion.div className='w-full py-36 space-y-12 md:max-w-[1400px] mx-auto px-8 md:px-20'
      // initial="hidden"
      // whileInView="visible"
      // viewport={{once: true, amount: 1}}
      // transition={{staggerChildren: 0.15}}
    >
      <motion.div className="flex justify-between items-baseline" variants={motions}>
        <h2 className='text-xl md:text-3xl font-bold dark:text-white duration-300'>最近活動</h2>
        <Link href="#" className='text-sm md:text-xl font-bold text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 duration-300'>查看更多<span>&rarr;</span></Link>
      </motion.div>
      <div className="flex justify-center w-full scrollbar-none">
        {
          events
          ? <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
              {events.map(event => {
                return (
                  <motion.li key={event.id} className="snap-center" variants={Cardmotions}>
                    <Link href="#" className="w-fit">
                      <EventCard event={event} width={270}/>
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          : <motion.div className="flex flex-col items-center gap-y-4 h-full my-8 px-8 text-center animate-wiggle" variants={Cardmotions}>
              <div className="text-navbarDark dark:text-sky-200 backdrop-blur-md">
                <p className="md:hidden text-2xl">個Server好似迷咗路，<br/>一陣再試下啦！</p>
                <p className="hidden md:block text-4xl">個Server好似迷咗路，一陣再試下啦！</p>
              </div>
              <Image src={'/404.png'} className="object-cover" width={500} height={350} alt={"404 Image"}/>
            </motion.div>
        }
      </div>
    </motion.div>

  )
}
