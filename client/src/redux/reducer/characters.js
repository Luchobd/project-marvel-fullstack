import { GET_CHARACTERS, GET_ID } from "../actions/characters";
import { GET_COMICS } from "../actions/comics.js";


const inititalState = {
  characters: [],
  allChracters: [],
  characterId: [],
  comics: [],
};

function rootReducer(state = inititalState, action) {
  switch (action.type) {
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case GET_ID:
      return {
        ...state,
        characterId: action.payload,
      };
      case "GET_COMICS":
        return {
          ...state,
          comics: action.payload,
        };
    default:
      return { ...state };
  }
}

export default rootReducer;
