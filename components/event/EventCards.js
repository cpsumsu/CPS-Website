import EventCard from './EventCard'

export default function EventCards({ events }) {
  const tagColor = {
    '比賽': '#E5A0A0',
    '工作坊': '#7AC2B1',
  }

  return (
    <div className="w-full">
      <ul className='flex space-x-8 py-6 before:shrink-0 before:w-8 after:shrink-0 after:w-8 md:before:w-20 md:after:w-20'>
        {events.map(event => {
          return (
            <li key={event.id} className="shrink-0 snap-center">
              <EventCard event={event} tagColor={tagColor}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
