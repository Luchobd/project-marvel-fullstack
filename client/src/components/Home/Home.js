import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCharacters } from "../../redux/actions/characters.js";
import { getComics } from "../../redux/actions/comics.js";

function Home() {
  const allChractersSelector = useSelector((state) => state.characters);
  const allComicsSelector = useSelector((state) => state.comics);

  console.log("characters", allChractersSelector)
  console.log("comics", allComicsSelector)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getComics());
  }, [dispatch]);

  return <div>Home</div>;
}

export default Home;
