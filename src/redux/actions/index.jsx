import HeroeApi from "../api/HeroeApi";

const heroesAction = () => {
  return async function (dispatch, getState) {
    const response = await HeroeApi.get("/heroes");
    dispatch({ type: "HEROES", payload: response });
  };
};

const heroAction = (id) => {
  return async function (dispatch, getState) {
    const response = await HeroeApi.get(`/hero?id=${id}`);
    dispatch({ type: "HERO", payload: response });
  };
};

export { heroesAction, heroAction };
