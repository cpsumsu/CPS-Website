import React from 'react'

import { tagColors } from "../../data/event"

export default function EventTypeFilter({eventTypes, setSelectedType}) {
  return (
    <div className='flex items-center space-x-4'>
        {eventTypes.map(type => {
            return (
                <button onClick={() => setSelectedType(type)} className="text-base font-bold text-white px-4 py-2 rounded-full cursor-pointer hover:-translate-y-1 duration-300 hover:shadow-md"
                style={{backgroundColor: tagColors[type]}}>
                    {type}
                </button>
            )
        })}
    </div>
  )
}
