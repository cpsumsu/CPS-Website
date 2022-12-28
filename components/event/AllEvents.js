import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import EventTypeFilter from "./EventTypeFilter"
import EventCard from "./EventCard"

import { eventTypes } from "../../data/event"

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

  const [filteredEvents, setFilteredEvents] = useState();
  const [selectedType, setSelectedType] = useState('全部');

  useEffect(() => {
    setFilteredEvents(events);
  }, [])

  useEffect(() => {
    if (!selectedType) return;

    if (selectedType === '全部') {
      setFilteredEvents(events);
      return;
    }

    setFilteredEvents(filterEvent(events, selectedType));
  }, [selectedType])

  const filterEvent = (events, selectedType) => {
    return events.filter(event => event.type === selectedType);
  }

  return (
    <motion.div className='w-full py-36 space-y-2 md:max-w-[1400px] mx-auto px-8 md:px-20'
      // initial="hidden"
      // whileInView="visible"
      // viewport={{once: true, amount: 1}}
      // transition={{staggerChildren: 0.15}}
    >
      <motion.div className="flex justify-between items-baseline" variants={motions}>
        <h2 className='text-xl md:text-3xl font-bold dark:text-white duration-300'>{selectedType}</h2>
        {/* <Link href="#" className='text-sm md:text-xl font-bold text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 duration-300'>查看更多<span>&rarr;</span></Link> */}
      </motion.div>
      <EventTypeFilter eventTypes={eventTypes} setSelectedType={setSelectedType}/>
      <div className="pt-6 flex justify-center w-full scrollbar-none">
        {
          filteredEvents
          ? <ul className='w-full flex flex-col md:flex-row justify-between flex-wrap gap-x-2 gap-y-12'>
              {filteredEvents.map(event => {
                return (
                  <motion.li key={event.id} className="snap-center" variants={Cardmotions}>
                    <EventCard event={event} width={270}/>
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
