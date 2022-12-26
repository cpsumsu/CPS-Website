import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import EventCard from './EventCard'

export default function EventCards({ events }) {
  const tagColor = {
    '比賽': '#E5A0A0',
    '工作坊': '#7AC2B1',
    '分享會': '#FFA430',
  }

  const motions = {
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
    <div className="w-full h-full">
      { 
        events
        ? <ul className='flex space-x-8 py-6 before:shrink-0 before:w-8 after:shrink-0 after:w-8 md:before:w-20 md:after:w-20'>
            {events.map(event => {
              return (
                <motion.li key={event.id} className="shrink-0 snap-center" variants={motions}>
                  <Link href="#">
                    <EventCard event={event} tagColor={tagColor} width={280}/>
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        : <motion.div className="flex flex-col items-center gap-y-4 h-full my-8 px-8 text-center animate-wiggle" variants={motions}>
            <div className="text-navbarDark dark:text-sky-200 backdrop-blur-md">
              <p className="md:hidden text-2xl">個Server好似迷咗路，<br/>一陣再試下啦！</p>
              <p className="hidden md:block text-4xl">個Server好似迷咗路，一陣再試下啦！</p>
            </div>
            <Image src={'/404.png'} className="object-cover" width={500} height={350} />
          </motion.div>
      }
    </div>
  )
}
