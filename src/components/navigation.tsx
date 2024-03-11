import { useFavourites } from "./favourites_context";
// our props have two properties - a number, and a function that takes a number and returns void
// we can define this as an interface, or anonymously like this:
interface NavigationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const { showFav, toggleShowFav } = useFavourites();
  const nextPage = () => {
    const newPageNumber = currentPage + 1;
    setCurrentPage(newPageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const newPageNumber = currentPage - 1;
      setCurrentPage(newPageNumber);
    }
  };

  return (
    <div className="navigation">
      <div className="navigation__item">
        <button className="navigation__button" onClick={prevPage}>
          Prev Page
        </button>
      </div>
      <div className="navigation__item">
        <button className="navigation__button" onClick={toggleShowFav}>
          {showFav ? "Show All" : "Show Favourites"}
        </button>
      </div>
      <div className="navigation__item">
        <button className="navigation__button" onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Navigation;
