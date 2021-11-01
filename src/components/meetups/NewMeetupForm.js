import { useRef } from "react"

import Card from "../ui/Card"
import classes from './NewMeetupForm.module.css'


function NewMeetupForm(props) {
  const titleRef = useRef()
  const imageRef = useRef()
  const addressRef = useRef()
  const descriptionRef = useRef()

  

  

  function submitHandler(event) {
    event.preventDefault()

    const title = titleRef.current.value
    const image = imageRef.current.value
    const address = addressRef.current.value
    const description = descriptionRef.current.value

    const meetupData = {
      title,
      image,
      address,
      description
    }

    props.addNewMeetup(meetupData)
  }

  
  return <Card>
    <section>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' required ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id='image' required ref={ imageRef }/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id='address' required ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows="5" required ref={descriptionRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </section>
  
  </Card>
}

export default NewMeetupForm