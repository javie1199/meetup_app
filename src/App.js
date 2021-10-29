import {Route, Switch} from 'react-router-dom'

import MainNavigation from './components/layout/MainNavigation';
import AllMeetupsPages from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import Favorites from './pages/Favorites';


function App() {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <Switch>
        <Route path='/new-meetup'><NewMeetupPage/></Route>
        <Route path='/favorites'><Favorites /></Route>
        <Route path='/'><AllMeetupsPages/></Route>
      </Switch>
    </div>
  )
}

export default App;