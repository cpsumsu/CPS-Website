import React from 'react'

import BlurImage from './BlurImage'
import { tagColors } from "../../data/event"

export default function EventDetail({ event }) {
    return (
        <div className='w-full py-36 space-y-12 md:max-w-[1400px] mx-auto px-8 md:px-20'>
            {/* Flex Wrapper */}
            <div className="flex flex-col lg:flex-row lg:justify-between">
                {/* Left Container - Event Details */}
                <div className="lg:w-2/3 flex flex-col flex-shrink lg:pr-[10%] gap-y-2 ">
                    <h1 className='text-4xl font-bold text-black dark:text-white theme-toggle-transition'>{event.name}</h1>
                    {/* Event Type and Date */}
                    <div className="flex items-center gap-x-1 text-[#6e6e6e] dark:text-gray-400 font-bold theme-toggle-transition">
                        <p className="inline-block text-sm text-white px-2 py-1 rounded-xl"
                        style={{backgroundColor: tagColors[event.event_type]}}>
                                {event.event_type}
                        </p>
                        <p className=''>-</p>
                        <p className=''>活動日期: &nbsp;</p>
                        <p>{event.date}</p>
                    </div>
                    <div className='pt-6 text-base lg:text-lg tracking-widest indent-8 dark:text-gray-300 theme-toggle-transition' dangerouslySetInnerHTML={{__html: event.content}}></div>
                </div>

                {/* Right Container - Event Poster */}
                <div className="lg:w-1/3">
                    <div className="lg:shadow-lg rounded-lg overflow-hidden">
                        <BlurImage src={event.image} width={350} height={600} fixedWidth={false} fixedHeight={false} alt={event.name}/>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className='mx-auto theme-toggle-transition'>
                <div className="bg-gray-200 h-2 w-full rounded-full dark:bg-description theme-toggle-transition" />
            </div>
        </div>
    )
}
