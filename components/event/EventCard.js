import BlurImage from "./BlurImage"
import { useRouter } from "next/router"

import { tagColors } from "../../data/event"

export default function EventCard({event, width}) {
  const EMPTY = '\u00A0';

  const router = useRouter();

  return (
    <div onClick={() => router.push(`/events/${event.id}`)} className='fix-ios-radius relative rounded-lg shadow-lg dark:shadow-md dark:shadow-slate-800 overflow-hidden cursor-pointer active:scale-[105%] md:hover:scale-[105%] md:hover:shadow-md duration-300' style={{width: `${width}px`}}>
      <BlurImage src={event.imageUrl} width={width} height={300} alt={event.name}/>
      {/* Card Content */}
      <div className="px-4 py-4 space-y-1 bg-white dark:bg-cardDark duration-300">
        <p className="inline-block text-sm font-bold text-white px-2 py-1 rounded-md" style={{backgroundColor: tagColors[event.type]}}>{event.type}</p>
        <p className="text-lg font-bold dark:text-white truncate duration-300">{event.name}</p>
        <p className="text-sm font-semibold text-neutral-400 truncate">{event.leader ?? EMPTY}</p>
      </div>

      {/* Event Date - Absolute */}
      <div className="absolute top-3 right-3 bg-white/90 dark:bg-navbarDark/50 backdrop-blur-sm px-3 py-2 rounded-md text-base dark:text-white font-bold duration-300">
        <p>{event.date}</p>
      </div>
    </div>
  )
}
