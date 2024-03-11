import React from "react";
import { useState, useContext } from "react";
const FavouritesContext = React.createContext<number[]>([]);
const UpdateFavouritesContext = React.createContext<(id: number) => void>(
  () => null
);

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

export const useUpdateFavourites = () => {
  return useContext(UpdateFavouritesContext);
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
    <FavouritesContext.Provider value={characterFavourites}>
      <UpdateFavouritesContext.Provider value={toggleFavouriteForCharacter}>
        {children}
      </UpdateFavouritesContext.Provider>
    </FavouritesContext.Provider>
  );
};
