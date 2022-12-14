// Write your code here
import './index.css'

const activeConstants = {
  initial: 'initial',
  register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const initialFunction = () => (
  <p className="initial-para">
    Click on an event, to view its registration details
  </p>
)

const registerEvent = () => (
  <div className="register-holder">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      alt="yet to register"
      className="register-image"
    />
    <p className="register-para">
      A live performance brings so much to your relationship with dance. Seeing
      dance live can often make you fall totally in love with this beautiful art
      form.
    </p>
    <button type="button" className="register-button">
      Register Here
    </button>
  </div>
)

const registeredEvent = () => (
  <div className="registered-holder">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
      className="tick-mark"
      alt="registered"
    />
    <h1 className="registered-message">
      You have already registered for the event
    </h1>
  </div>
)

const closedEvent = () => (
  <div className="closed-holder">
    <img
      src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      alt="registrations closed"
      className="closed-image"
    />
    <h1 className="closed-heading">Registrations Are Closed Now!</h1>
    <p className="closed-para">
      Stay tuned. We will reopen the registrations soon!
    </p>
  </div>
)

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  switch (registrationStatus) {
    case activeConstants.register:
      return registerEvent()
    case activeConstants.registered:
      return registeredEvent()
    case activeConstants.closed:
      return closedEvent()
    default:
      return initialFunction()
  }
}

export default ActiveEventRegistrationDetails
