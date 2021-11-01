import NewMeetupForm from "../components/meetups/NewMeetupForm"

import { useHistory } from "react-router"



function NewMeetupPage() {
  const history = useHistory()

  function addNewMeetupHandler(meetup) {
    fetch('https://react-getting-started-1b697-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/')
    })
  }


  return <div>
    <h1>New Meetup Form</h1>
    <NewMeetupForm addNewMeetup={ addNewMeetupHandler }/>
  </div>
}

export default NewMeetupPage