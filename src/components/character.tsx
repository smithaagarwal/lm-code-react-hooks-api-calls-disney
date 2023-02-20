import { DisneyCharacter } from "../disney_character";

interface CharacterProps {
  character: DisneyCharacter;
}

const Character: React.FC<CharacterProps> = ({ character }) => {
  return (
    <article className="card">
      
      <h2>{character.name}</h2>

      <div className="card__actions">Add to favourites</div>

      <img
        className="card__img"
        src={character.imageUrl}
        alt={character.name}
      />

    </article>
  );
};

export default Character;
