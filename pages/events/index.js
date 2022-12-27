import AllEvents from '../../components/event/AllEvents'
import ScrollToTop from '../../components/ScrollToTop'

import EventUtils from '../../utils/EventUtils'

export default function AllEventPage(props) {
	const { events } = props;

	return (
		<main className='w-full snap-start mx-auto min-h-screen theme-toggle'>
			<ScrollToTop />
			<AllEvents events={events}/>
		</main>
	)
}

export async function getStaticProps() {
	const events = await EventUtils.getAllEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 60 * 30, // Re-generate the page every 30 mins
	};
}