import { remark } from 'remark'
import html from 'remark-html'

export default class EventUtils {
	static async getEvents(limit_num = 4) {
		const API_URL = process.env.NEXT_PUBLIC_EVENT_API_URL;
		const query_string = `?limit=${limit_num}`;
		let events;

		try {
			let raw = await fetch(API_URL + query_string);
			raw = await raw.json();
			events = this.shapeData(raw.data);
		}
		catch {
			events = null;
		}

		return events;
	}

	static async getAllEvents(page_num = 1, show_meta = false) {
		const API_URL = process.env.NEXT_PUBLIC_EVENT_API_URL;
		let events, meta;

		try {
			let raw = await fetch(`${API_URL}?page=${page_num}`);
			raw = await raw.json();
			events = this.shapeData(raw.data);
			meta = raw.meta;
		}
		catch {
			events = null;
			meta = null;
		}

		if (show_meta) return {events, meta};

		return events;
	}

	static async getEventDetails(id) {
		const API_URL = process.env.NEXT_PUBLIC_EVENT_API_URL;
		const query_string = `/${id}`;

		let event;

		try {
			let raw = await fetch(API_URL + query_string);
			raw = await raw.json();
			event = this.shapeDetails(raw.data);
		}
		catch {
			event = null;
		}

		return event;
	}

	static shapeData(events) {
		return events.map(event => {
			const leader = this.concateArrayWithNullCheck([event.leaders, event.organizers]);
			const date = new Date(event.date).toLocaleDateString('en-us', { day: "numeric", month: "short", year: "numeric" });

			return {
				...event,
				type: event.event_type,
				leader: leader,
				imageUrl: event.image,
				date: date
			};
		})
	}

	static shapeDetails(event) {
		const date = new Date(event.date).toLocaleDateString('en-us', { day: "numeric", month: "short", year: "numeric" });

		return {
			...event,
			date: date
		}
	}

	static concateArrayWithNullCheck(param) {
		let newArray = new Array();

		param.forEach(array => {
			if (!array) return;

			newArray = newArray.concat(array);
		});

		return newArray.length
			? newArray.map(leader => {
				return leader.name;
			}).join(', ')
			: null
	}
}