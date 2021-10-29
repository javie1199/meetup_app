import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Meetups</h1>
      <ul>
        <li><Link to='/'>All Meet up</Link></li>
        <li><Link to='/new-meetup'>New Meetup</Link></li>
        <li><Link to='/favorites'>Favorites</Link></li>
      </ul>
    </header>
  )
}

export default MainNavigation