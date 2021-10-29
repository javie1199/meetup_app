import {Link} from 'react-router-dom'

function MainNavigation() {
  return (
    <div>
      <ul>
        <li><Link to='/'>All Meet up</Link></li>
        <li><Link to='/new-meetup'>New Meetup</Link></li>
        <li><Link to='/favorites'>Favorites</Link></li>
      </ul>
    </div>
  )
}

export default MainNavigation