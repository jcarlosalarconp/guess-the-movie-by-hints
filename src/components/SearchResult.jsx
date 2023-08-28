import "./SearchResult.css";

export const SearchResult = ({ result, onResultClick }) => {
  return (
    <div
      className="search-result"
      onClick={(e) => onResultClick(e, result)}
    >
      {result.title}
    </div>
  );
};