import React, { useEffect } from "react";
import { useState } from "react";
import { DisneyCharacter } from "../disney_character";
import Character from "./character";
import { useFavourites } from "./favourites_context";

interface CharacterContainerProps {
  characters: Array<DisneyCharacter>;
}

const CharacterContainer: React.FC<CharacterContainerProps> = ({
  characters,
}) => {
  const { favourites, showFav } = useFavourites();
  const [data, setData] = useState(characters);
  useEffect(() => {
    if (showFav) setData(favourites);
    else setData(characters);
  }, [characters, showFav, favourites]);
  return (
    <div className="card-container">
      {data.map((character) => (
        <Character key={character._id} character={character} />
      ))}
    </div>
  );
};

export default CharacterContainer;
