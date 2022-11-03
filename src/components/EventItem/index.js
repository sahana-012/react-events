// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, activeId, onClickEvent} = props
  const {id, imageUrl, name, location, registrationStatus} = eventDetails

  const selectEvent = activeId === id ? 'add-border' : ''

  const selectedEvent = () => {
    onClickEvent(registrationStatus, id)
  }

  return (
    <li className="list-item ">
      <button type="button" className="event-button" onClick={selectedEvent}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${selectEvent}`}
        />
      </button>
      <p className="event-heading ">{name}</p>
      <p className="event-location ">{location}</p>
    </li>
  )
}
export default EventItem
