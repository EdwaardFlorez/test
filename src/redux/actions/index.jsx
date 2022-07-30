import HeroeApi from "../api/HeroeApi";

const heroesAction = (size, page) => {
  return async function (dispatch, getState) {
    let test = `/heroes?size=${size}&page=${page}`;
    const response = await HeroeApi.get(`/heroes?size=${size}&page=${page}`);
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
