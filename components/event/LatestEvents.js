import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import EventCard from "./EventCard"
import EventUtils from "../../utils/EventUtils"

export default function LatestEvents() {
	const [events, setEvents] = useState(null);
	
	useEffect(() => {
		const fetchData = async () => {
			try {
				const newEvents = await EventUtils.getEvents(4);
	
				setEvents(newEvents);
			}
			catch {
				setEvents(null);
			}
		};

		fetchData();
	}, [])

	return (
		<div className='w-full space-y-2 md:space-y-8'>
			<div className="flex justify-between items-baseline">
				<h2 className='text-lg md:text-2xl font-bold dark:text-white duration-300'>最新活動</h2>
				<Link href="/events" className='text-sm md:text-lg font-bold text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 duration-300'>查看更多<span>&rarr;</span></Link>
			</div>
			<div className="snap-center md:snap-end flex w-full pb-4 md:pb-12">
				<div className="w-full">
				{ 
					events
					? <ul className='flex justify-between space-x-8 py-6 overflow-y-visible overflow-x-auto scrollbar-none snap-x snap-mandatory'>
							{events.map(event => {
								return (
									<li key={event.id} className="shrink-0 grow-0 snap-center">
										<EventCard event={event} width={270}/>
									</li>
								)
							})}
						</ul>
					: <div className="flex flex-col items-center gap-y-4 h-full my-8 px-8 text-center overflow-hidden animate-wiggle">
							<div className="text-navbarDark dark:text-sky-200 backdrop-blur-md">
								<p className="md:hidden text-2xl">個Server好似迷咗路，<br/>一陣再試下啦！</p>
								<p className="hidden md:block text-4xl">個Server好似迷咗路，一陣再試下啦！</p>
							</div>
							<Image src={'/404.png'} className="object-cover" width={500} height={350} alt={"404 Image"}/>
						</div>
				}
				</div>
			</div>
		</div>

	)
}
