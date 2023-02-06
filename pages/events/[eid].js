import Head from 'next/head'
import ScrollToTop from '../../components/ScrollToTop'
import EventUtils from '../../utils/EventUtils'
import EventDetail from '../../components/event/EventDetail'

export default function EventDetailPage(props) {
	const { event } = props;

	return (
		<>
			<Head>
				<title>{`${event.name} | 澳門大學電腦學會`}</title>
				<meta name="description" content={event.name} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className='w-full snap-start mx-auto min-h-screen theme-toggle'>
				<ScrollToTop />
				<EventDetail event={event} />
			</main>
		</>
	)
}

export async function getStaticProps({ params }) {
	const { eid } = params;

	const event = await EventUtils.getEventDetails(eid);

	if (!event) return {
		notFound: true
	}

	return {
		props: {
			event: event
		}
	};
}

export async function getStaticPaths() {
	const events = await EventUtils.getAllEvents();

	if (!events) {
		return {
			paths: [],
			fallback: 'blocking'
		};
	}

	const paths = events.map(event => ({
		params: { eid: `${event.id}` }
	}));

	return {
		paths: paths,
		fallback: 'blocking'
	};
}