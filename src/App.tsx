import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header";
import CharacterContainer from "./components/character_container";
import Navigation from "./components/navigation";
import { DisneyCharacter } from "./disney_character";

export const FavouritesContext = React.createContext<number[]>([]);
export const UpdateFavouritesContext = React.createContext<
  (ids: Array<number>) => void
>(([]) => null);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);
  const [characterFavourites, setCharacterFavourites] = useState<Array<number>>(
    []
  );

  useEffect(() => {
    const getCharacters = async (pageNumber: number) => {
      const apiResponse = await fetch(
        `https://api.disneyapi.dev/character?page=${pageNumber}`
      );
      const json = (await apiResponse.json()) as { data: DisneyCharacter[] };
      setCharacters(json.data);
    };
    getCharacters(currentPage);
  }, [currentPage]);

  return (
    <FavouritesContext.Provider value={characterFavourites}>
      <UpdateFavouritesContext.Provider value={setCharacterFavourites}>
        <div className="page">
          <Header currentPage={currentPage} />
          <Navigation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <CharacterContainer characters={characters} />
        </div>
      </UpdateFavouritesContext.Provider>
    </FavouritesContext.Provider>
  );
};

export default App;
