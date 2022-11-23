import { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

console.log("theEvents", events)

  const fetchEvents = async() => {
    const response = await fetch("http://localhost:5005/events")
    const events = await response.json()
    setEvents(events)

  }
  useEffect( () => {
    fetchEvents()
    
  }, [] )


  return (
    <div className="App">
      <h1>SportMeet Events</h1>
      {events.map(event => 
      <div key={event._id}>
        <h2 >{event.name}</h2>
        <p>{event.sport}</p>
      </div>
      )}
    </div>
  );
}

export default App;
