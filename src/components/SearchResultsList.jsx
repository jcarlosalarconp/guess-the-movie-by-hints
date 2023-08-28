import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, onResultClick }) => {
  return (
    <div className="results-list">
      {results.map((result) => {
        return <SearchResult result={result} key={result.id} onResultClick={onResultClick}/>;
      })}
    </div>
  );
};