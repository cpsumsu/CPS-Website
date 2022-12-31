import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { eventTypes } from "../../data/event"
import EventUtils from "../../utils/EventUtils"
import EventCard from "./EventCard"
import EventTypeFilter from "./EventTypeFilter"
import Spinner from "../status/Spinner"

export default function AllEvents(props) {
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

  const cardMotions = {
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

  const [events, setEvents] = useState(props.events);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const [filteredEvents, setFilteredEvents] = useState();
  const [selectedType, setSelectedType] = useState('全部');

  useEffect(() => {
    setFilteredEvents(events);
    const scrollEl = document.getElementById('scroll');
    scrollEl.addEventListener('scroll', handleScroll);

    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, [])

  useEffect(() => {
    if (!selectedType) return;

    if (selectedType === '全部') {
      setFilteredEvents(events);
      return;
    }

    setFilteredEvents(filterEvent(events, selectedType));
  }, [selectedType, events])

  useEffect(() => {
    if (!isFetching || !hasMore) return;

    fetchEvents();
  }, [currentPageNum])

  const filterEvent = (events, selectedType) => {
    return events.filter(event => event.type === selectedType);
  }

  let timeout;

  const handleScroll = useCallback(() => {
    const scrollEl = document.getElementById('scroll');
    
    if (window.innerHeight + scrollEl.scrollTop + 1 < scrollEl.scrollHeight) return;
    if (!hasMore) return;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (isFetching) return;

      setIsFetching(true);
      setCurrentPageNum(prev => prev += 1);
    }, 50);

  })

  const fetchEvents = useCallback(async () => {
    let newEvents, meta;
    try {
      const data = await EventUtils.getAllEvents(currentPageNum, true);

      newEvents = data.events;
      meta = data.meta;
    }
    catch {
      setHasMore(false);
      return;
    }

    if (!newEvents) {
      setIsFetching(false);
      setHasMore(false);
      return;
    };

    setEvents(prev => [...prev, ...newEvents]);

    setIsFetching(false);

    const scrollEl = document.getElementById('scroll');

    if (meta.current_page === meta.last_page) {
      setHasMore(false);
      setIsFetching(false);
      scrollEl.removeEventListener('scroll', handleScroll);
      return;
    }

    scrollEl.addEventListener('scroll', handleScroll);
  }, [currentPageNum])

  return (
    <motion.div className='w-full py-36 space-y-8 md:max-w-[1400px] mx-auto px-8 md:px-20'
    // initial="hidden"
    // whileInView="visible"
    // viewport={{once: true, amount: 1}}
    // transition={{staggerChildren: 0.15}}
    >
      <motion.div className="space-y-2">
        <h2 className='text-xl md:text-4xl font-bold dark:text-white duration-300'>活動頁面 &#187; {selectedType}</h2>
        {/* <Link href="#" className='text-sm md:text-xl font-bold text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 duration-300'>查看更多<span>&rarr;</span></Link> */}
        { filteredEvents && <EventTypeFilter eventTypes={eventTypes} setSelectedType={setSelectedType} /> }
      </motion.div>
      <div className="relative flex flex-col justify-center w-full">
        {
          filteredEvents
            ? <>
              <ul className='flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-12'>
                {filteredEvents.map(event => {
                  return (
                    <motion.li layout key={event.id} className="snap-center">
                      <EventCard event={event} width={270} />
                    </motion.li>
                  )
                })}
              </ul>
              {(isFetching && hasMore) && 
                <div className="absolute w-full flex justify-center bottom-0 translate-y-[200%]">
                  <Spinner />
                </div>
              }
              {!hasMore &&
                <div className="absolute w-full flex justify-center bottom-0 translate-y-[200%]">
                  <p className="text-lg font-bold text-navbarDark dark:text-gray-300">無晒活動啦</p>
                </div>
              }
            </>
            : <motion.div className="flex flex-col items-center gap-y-4 h-full my-8 px-8 text-center animate-wiggle" variants={cardMotions}>
              <div className="text-navbarDark dark:text-sky-200 backdrop-blur-md">
                <p className="md:hidden text-2xl">個Server好似迷咗路，<br />一陣再試下啦！</p>
                <p className="hidden md:block text-4xl">個Server好似迷咗路，一陣再試下啦！</p>
              </div>
              <Image src={'/404.png'} className="object-cover" width={500} height={350} alt={"404 Image"} />
            </motion.div>
        }
      </div>
    </motion.div>

  )
}
