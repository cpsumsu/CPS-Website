export default class EventUtils {
    static shapeData (events) {
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