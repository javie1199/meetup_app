import Card from '../ui/Card'
import classes from './MeetupItem.module.css'


function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <img className={classes.image } src={props.image} alt={props.title} />
        <div className={classes.content}>
          <h3>{ props.title}</h3>
          <address>{ props.address }</address>
          <p>{props.description}</p>
          <div className={classes.actions}>
            <button >Add to Favorites</button>
          </div>
      </div>
      </Card>
    </li>
  )
}

export default MeetupItem