import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { eventTypes } from "../../data/event"
import EventUtils from "../../utils/EventUtils";
import EventCard from "./EventCard"
import EventTypeFilter from "./EventTypeFilter"

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
    console.log("PAGE_NAME", currentPageNum);
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
      console.log("Scrolled to end");

      if (isFetching) return;

      setIsFetching(true);
      setCurrentPageNum(prev => prev += 1);
    }, 1000);

  })

  const fetchEvents = useCallback(async () => {
    let newEvents, meta;
    try {
      const data = await EventUtils.getAllEvents(currentPageNum, true);

      console.log(data);

      newEvents = data.events;
      meta = data.meta;

      console.log(meta);
      console.log(meta.current_page);
    }
    catch {
      setHasMore(false);
      return;
    }

    if (!newEvents) return;

    console.log("append events");

    setEvents(prev => [...prev, ...newEvents]);

    setIsFetching(false);

    if (meta.current_page === meta.last_page) {
      console.log("last Page");
      setHasMore(false);
      return;
    }
    const scrollEl = document.getElementById('scroll');
    scrollEl.addEventListener('scroll', handleScroll);
  }, [currentPageNum])

  return (
    <motion.div className='w-full py-36 space-y-8 md:max-w-[1400px] mx-auto px-8 md:px-20'
    // initial="hidden"
    // whileInView="visible"
    // viewport={{once: true, amount: 1}}
    // transition={{staggerChildren: 0.15}}
    >
      <motion.div className="space-y-2" variants={motions}>
        <h2 className='text-xl md:text-4xl font-bold dark:text-white duration-300'>活動頁面 &#187; {selectedType}</h2>
        {/* <Link href="#" className='text-sm md:text-xl font-bold text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 duration-300'>查看更多<span>&rarr;</span></Link> */}
        <EventTypeFilter eventTypes={eventTypes} setSelectedType={setSelectedType} />
      </motion.div>
      <div className="flex flex-col justify-center w-full scrollbar-none">
        {
          filteredEvents
            ? <>
              <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-14 gap-y-12'>
                {filteredEvents.map(event => {
                  return (
                    <li key={event.id} className="snap-center">
                      <EventCard event={event} width={270} />
                    </li>
                  )
                })}
              </ul>
              {/* {isFetching && <p>Loading</p>} */}
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
