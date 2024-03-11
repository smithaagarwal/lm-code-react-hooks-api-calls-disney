import React from "react";
import { useState, useContext } from "react";
const FavouritesContext = React.createContext<{
  favourites: number[];
  toggleFavourites: (id: number) => void;
}>({ favourites: [], toggleFavourites: () => null });

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

export const FavouritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characterFavourites, setCharacterFavourites] = useState<Array<number>>(
    []
  );
  const toggleFavouriteForCharacter = (characterid: number) => {
    if (!characterFavourites.includes(characterid)) {
      setCharacterFavourites([...characterFavourites, characterid]);
    } else {
      const updatedFavourites = characterFavourites.filter(
        (id) => id !== characterid
      );
      setCharacterFavourites(updatedFavourites);
    }
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites: characterFavourites,
        toggleFavourites: toggleFavouriteForCharacter,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
