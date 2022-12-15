import Image from "next/image"

export default function EventCard({event, tagColor}) {
  return (
    <div className='relative rounded-lg shadow-lg dark:shadow-md dark:shadow-slate-800 overflow-hidden hover:scale-[105%] hover:shadow-md duration-300'>
      <Image src={event.imageUrl} width={300} height={300} alt={event.name}
        className="object-cover w-64 h-64"
      />
      {/* Card Content */}
      <div className="px-6 py-4 space-y-1 bg-gray-100 dark:bg-cardDark">
        <p className="inline-block text-sm font-bold text-white px-2 py-1 rounded-md" style={{backgroundColor: tagColor[event.type]}}>{event.type}</p>
        <p className="text-lg font-bold dark:text-white">{event.name}</p>
        <p className="text-sm font-semibold text-neutral-400">{event.leader}</p>
      </div>
    </div>
  )
}
