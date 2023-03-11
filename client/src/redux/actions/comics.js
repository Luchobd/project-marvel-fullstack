export const GET_COMICS = "GET_COMICS";

export function getComics() {
  return async function (dispatch) {
    const resp = await fetch("http://localhost:3001/comics");
    const data = await resp.json();
    dispatch({
      type: "GET_COMICS",
      payload: data,
    });
  };
}