import { DisneyCharacter } from "../disney_character";

interface CharacterProps {
  character: DisneyCharacter;
  characterFavourites: Array<number>;
  updateFavourites: (favourites: Array<number>) => void;
}

const Character: React.FC<CharacterProps> = ({
  character,
  characterFavourites,
  updateFavourites,
}) => {
  const toggleFavouriteForCharacter = (characterid: number) => {
    if (!characterFavourites.includes(characterid)) {
      updateFavourites([...characterFavourites, characterid]);
    } else {
      const updatedFavourites = characterFavourites.filter(
        (id) => id !== characterid
      );
      updateFavourites(updatedFavourites);
    }
  };
  return (
    <article className="card">
      <h2>{character.name}</h2>

      <button
        className="card__button "
        onClick={() => {
          toggleFavouriteForCharacter(character._id);
        }}
      >
        {!characterFavourites.includes(character._id)
          ? "Add to favourites"
          : "Favourited"}
      </button>

      <img
        className="card__img"
        src={character.imageUrl}
        alt={character.name}
      />
    </article>
  );
};

export default Character;
