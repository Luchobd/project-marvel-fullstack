import axios from "axios";

export const GET_CHARACTERS = "GET_CHARACTERS";
export const GET_ID = "GET_ID";

export const getCharacters = () => async (dispatch) => {
  const rutaGetCharacters = await axios.get("http://localhost:3001/characters");
  dispatch({
    type: "GET_CHARACTERS",
    payload: rutaGetCharacters,
  });
};

export const getCharacterId = (id) => async (dispatch) => {
  const rutaGetCharacterId = await axios.get(
    `http://localhost:3001/characters/${id}`
  );
  return dispatch({
    type: "GET_ID",
    payload: rutaGetCharacterId.id,
  });
};

export function postCharacter(payload) {
  return async function () {
    const rutaCreate = await axios.post(
      "http://localhost:3001/characters",
      payload
    );
    return rutaCreate;
  };
}
