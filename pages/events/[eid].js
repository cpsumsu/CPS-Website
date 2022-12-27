import ScrollToTop from '../../components/ScrollToTop'
import EventUtils from '../../utils/EventUtils'
import EventDetail from '../../components/event/EventDetail'

export default function EventDetailPage(props) {
	const { event } = props;

    return (
        <main className='w-full snap-start mx-auto min-h-screen theme-toggle'>
			<ScrollToTop />
			<EventDetail event={event} />
		</main>
        
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

    let paths;

    try {
        paths = events.map(event => ({
            params: { eid: `${event.id}` }
        }));
    }
    catch {
        return {
            paths: [],
            fallback: 'blocking'
        };
    }

    return {
        paths: paths,
        fallback: 'blocking'
    };
}