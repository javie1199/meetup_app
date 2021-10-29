import classes from './MeetupItem.module.css'


function MeetupItem(props) {
  return (
    <div className={classes.item}>
      <img className={classes.image } src={props.image} alt={props.title} />
      <div className={classes.content}>
        <h3>{ props.title}</h3>
        <address>{ props.address }</address>
        <p>{props.description}</p>
        <div className={classes.actions}>
          <button >Add to Favorites</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default MeetupItem