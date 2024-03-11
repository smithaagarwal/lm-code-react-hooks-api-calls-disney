import React from "react";
import { DisneyCharacter } from "../disney_character";
import { useState, useContext } from "react";
const FavouritesContext = React.createContext<{
  favourites: DisneyCharacter[];
  toggleFavourites: (character: DisneyCharacter) => void;
  showFav: boolean;
  toggleShowFav: () => void;
}>({
  favourites: [],
  toggleFavourites: () => null,
  showFav: false,
  toggleShowFav: () => null,
});

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

export const FavouritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characterFavourites, setCharacterFavourites] = useState<
    Array<DisneyCharacter>
  >([]);
  const [showFavourites, setShowFavourites] = useState<boolean>(false);

  const toggleShowFav = () => {
    setShowFavourites(!showFavourites);
  };

  const toggleFavouriteForCharacter = (character: DisneyCharacter) => {
    if (!characterFavourites.some((favchar) => favchar._id === character._id)) {
      setCharacterFavourites([...characterFavourites, character]);
    } else {
      const updatedFavourites = characterFavourites.filter(
        (favchar) => favchar._id !== character._id
      );
      setCharacterFavourites(updatedFavourites);
    }
    console.log(characterFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites: characterFavourites,
        toggleFavourites: toggleFavouriteForCharacter,
        showFav: showFavourites,
        toggleShowFav: toggleShowFav,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
