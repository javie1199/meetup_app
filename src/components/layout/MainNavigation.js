import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Meetups</h1>
      <ul>
        <li>
          <Link to="/">All Meet up</Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorites{" "}
            <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
