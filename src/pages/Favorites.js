import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";
import { useContext } from "react";

function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorite Meetup</h1>
      <MeetupList meetups={favoriteCtx.favorites}></MeetupList>
    </div>
  );
}

export default Favorites;
