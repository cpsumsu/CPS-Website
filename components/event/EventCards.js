import { motion } from "framer-motion"
import Link from "next/link"
import EventCard from './EventCard'

export default function EventCards({ events }) {
  const tagColor = {
    '比賽': '#E5A0A0',
    '工作坊': '#7AC2B1',
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
    <div className="w-full">
      <ul className='flex space-x-8 py-6 before:shrink-0 before:w-8 after:shrink-0 after:w-8 md:before:w-20 md:after:w-20'>
        {events.map(event => {
          return (
            <motion.li key={event.id} className="shrink-0 snap-center" variants={motions}>
              <Link href="#">
                <EventCard event={event} tagColor={tagColor}/>
              </Link>
            </motion.li>
          )
        })}
      </ul>
    </div>
  )
}
