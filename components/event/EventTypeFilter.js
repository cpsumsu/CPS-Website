import React from 'react'

import { tagColors } from "../../data/event"

export default function EventTypeFilter({eventTypes, setSelectedType}) {
  return (
    <div className='flex items-center space-x-4 scrollbar-none'>
        {eventTypes.map(type => {
            return (
                <button key={type} onClick={() => setSelectedType(type)} className="shrink-0 text-sm md:text-base font-bold text-white px-3 py-2 md:px-4 md:py-2 rounded-full cursor-pointer md:hover:-translate-y-1 duration-300 hover:shadow-md select-none"
                style={{backgroundColor: tagColors[type]}}>
                    {type}
                </button>
            )
        })}
    </div>
  )
}
