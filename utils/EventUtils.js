export default class EventUtils {
    static async getEvents(limit_num = 4) {
        const API_URL = process.env.EVENT_API_URL;
        const LIMIT_QUERY = `?limit=${limit_num}`;
        let events;

        try {
          let raw = await fetch(API_URL + LIMIT_QUERY);
          raw = await raw.json();
          events = this.shapeData(raw.data);
        }
        catch {
          events = null;
        }

        return events;
    }

    static async getAllEvents() {
        const API_URL = process.env.EVENT_API_URL;
        let events;

        try {
          let raw = await fetch(API_URL);
          raw = await raw.json();
          events = this.shapeData(raw.data);
        }
        catch {
          events = null;
        }

        return events;
    }

    static shapeData(events) {
        return events.map(event => {
          const leader = this.concateArrayWithNullCheck([event.leaders, event.organizers]);
          const date = new Date(event.date).toLocaleDateString('en-us', {day: "numeric", month: "short", year:"numeric"});
      
          return {
            ...event,
            type: event.event_type,
            leader: leader,
            imageUrl: event.image,
            date: date
          };
        })
      }
      
    static concateArrayWithNullCheck(param) {
      let newArray = new Array();
    
      param.forEach(array => {
        if (!array) return;
    
        newArray = newArray.concat(array);
      });
    
      return newArray.length
        ?  newArray.map(leader => {
            return leader.name;
          }).join(', ')
        : null
    }
}