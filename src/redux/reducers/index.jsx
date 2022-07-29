import { combineReducers } from "redux";

const heroesReducer = (heroes = [], action) => {
  if (action.type === "HEROES") {
    return action.payload;
  }
  return heroes;
};

const heroReducer = (hero = null, action) => {
  if (action.type === "HERO") {
    return action.payload;
  }
  return hero;
};

export default combineReducers({
  heroes: heroesReducer,
  hero: heroReducer,
});
