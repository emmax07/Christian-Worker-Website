// function Events() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/events").then((response) => {
//       setEvents(response.data);
//     });
//   }, []);

//   return (
//     <div className="events">
//       <h2>Upcoming Events</h2>
//       <div className="cards">
//         {events.map((event) => (
//           <div key={event.id} className="card">
//             <h3>{event.title}</h3>
//             <p>{event.description}</p>
//             <span>{event.date}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Events;
