import Image from "next/image"

export default function EventCard({event, tagColor}) {
  return (
    <div className='relative bg-gray-100 rounded-lg drop-shadow-md shadow-lg overflow-hidden'>
        <Image src={event.imageUrl} width={300} height={300} alt={event.name}
          className="object-cover w-64 h-64"
        />
        {/* Card Content */}
        <div className="px-6 py-4 space-y-1">
          <p className="inline-block text-sm font-bold text-white px-2 py-1 rounded-md" style={{backgroundColor: tagColor[event.type]}}>{event.type}</p>
          <p className="text-lg font-bold">{event.name}</p>
          <p className="text-sm font-semibold text-neutral-400">{event.leader}</p>
        </div>
    </div>
  )
}
