import EventCard from './EventCard'

export default function EventCards({ events }) {
  const tagColor = {
    '比賽': '#E5A0A0',
    '工作坊': '#7AC2B1',
  }

  return (
    <div className="w-full px-8 md:px-20">
      <ul className='flex space-x-8 py-6 w-full'>
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
