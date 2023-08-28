import { useState } from "react";
import "./SearchBar.css";

const API_KEY = 'd021cf44'


export const SearchBar = ({ setResults, inputValue, setInputValue }) => {

    const fetchData = (value) => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
            .then((response) => response.json())
            .then((json) => {
                const results = json.Search?.map(movie => ({
                    id: movie.imdbID,
                    title: movie.Title,
                }))

                setResults(results);
            });
    };

    const handleChange = (value) => {
        setInputValue(value);
        fetchData(value);
    };

    return (
        <div className="input-wrapper">
            <input
                id="movie-searcher"
                placeholder="Movie title"
                value={inputValue}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    );
};