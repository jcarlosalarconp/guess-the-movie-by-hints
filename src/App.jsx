import { useState, useEffect, useRef, useCallback } from 'react'
import movieJSON from './movie.json'
import moviesJSON from './movies.json'
import { Search } from './components/Icons'

import './App.css'
import debounce from 'just-debounce-it'
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";

function App() {

  const [movie, setMovie] = useState(movieJSON)
  const [score, setScore] = useState(0)

  const [searchedMovies, setSearchedMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState({})

  const [inputValue, setInputValue] = useState('')

  const getMovies = () => {
    return moviesJSON
  }

  const debouncedGetMovies = useCallback(
    debounce(query => {
      getMovies({ query })
    }, 300)
    , [getMovies]
  )

  const handleClick = (e) => {
    e.target.style.display = 'none'
    switch (e.target.id) {
      case 'title-hint':
        document.getElementById('title').style.display = 'block'
        setScore(score + 25)
        break
      case 'genre-hint':
        document.getElementById('genre').style.display = 'block'
        setScore(score + 5)
        break
      case 'poster-hint':
        document.getElementById('poster').style.display = 'block'
        setScore(score + 50)
        break
      case 'synopsis-hint':
        document.getElementById('synopsis').style.display = 'block'
        setScore(score + 30)
        break
      case 'actors-hint':
        document.getElementById('actors').style.display = 'block'
        setScore(score + 40)
        break
      case 'director-hint':
        document.getElementById('director').style.display = 'block'
        setScore(score + 40)
        break
      case 'year-hint':
        document.getElementById('year').style.display = 'block'
        setScore(score + 20)
        break
      case 'duration-hint':
        document.getElementById('duration').style.display = 'block'
        setScore(score + 10)
        break
    }
  }

  const onResultClick = (e, result) => {
    e.preventDefault()
    setSelectedMovie(result)
    setInputValue(result.title)
    setSearchedMovies([])
  }

  const checkMovie = () => {
    if (!inputValue || !selectedMovie) return

    if (selectedMovie.id === movie.imdbID) {
      alert('You win! The movie is ' + movie.Title)
    } else {
      alert('Incorrect... Try again. (15pts)')
      setScore(score + 15)
      setInputValue('')
      setSelectedMovie({})
    }
  }
  return (
    <>
      <h1>Guess the Movie by Hints</h1>
      <div style={{ display: 'flex' }}>
        <h1>SCORE:</h1>
        <h1 style={{ color: 'red', marginLeft: '10px' }}>{score}</h1>
      </div>

        <div>
          <SearchBar setResults={setSearchedMovies} inputValue={inputValue} setInputValue={setInputValue} />
          {searchedMovies && searchedMovies.length > 0 && <SearchResultsList results={searchedMovies} onResultClick={onResultClick} />}
        </div>
        <button onClick={checkMovie}><Search /></button>

      <article className='movie-card'>
        <span id='title-hint' className='hint' onClick={handleClick} style={{ height: '40px' }}>
          Click here to unlock the title (25pts)
        </span>
        <h2 id='title' style={{ display: 'none' }}>{movie.Title}</h2>

        <span id='genre-hint' className='hint' onClick={handleClick} style={{ height: '40px', width: '300px' }}>
          Click here to unlock the genre (5pts)
        </span>
        <h4 id='genre' style={{ display: 'none' }}>{movie.Genre}</h4>

        <div style={{ display: 'flex' }}>
          <span id='poster-hint' className='hint' onClick={handleClick} style={{ height: '444px', width: '300px' }}>
            Click here to unlock the poster (50pts)
          </span>
          <img id='poster' style={{ display: 'none' }} src={movie.Poster} />
          <div style={{ marginLeft: '20px', width: '500px' }}>

            <span id='synopsis-hint' className='hint' onClick={handleClick} style={{ height: '150px' }}>
              Click here to unlock the synopsis (30pts)
            </span>
            <p id='synopsis' style={{ display: 'none' }}  >{movie.Plot}</p>



            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span id='actors-hint' className='hint' onClick={handleClick} style={{ height: '150px', width: '200px' }}>
                Click here to unlock the actors (40pts)
              </span>
              <div id='actors' style={{ display: 'none' }}>
                <ul>
                  {
                    movie.Actors.split(', ').map(actor => {
                      return (
                        <>
                          <li key={movie.Actors.indexOf(actor)}>{actor}</li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>

              <span id='director-hint' className='hint' onClick={handleClick} style={{ height: '150px', width: '200px' }}>
                Click here to unlock the director (40pts)
              </span>
              <div id='director' style={{ display: 'none' }}>
                <p>{movie.Director}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <span id='year-hint' className='hint' onClick={handleClick} style={{ height: '50px', width: '80px' }}>
            Click here to unlock the year (20pts)
          </span>
          <p id='year' style={{ display: 'none' }}>{movie.Year}</p>

          <span id='duration-hint' className='hint' onClick={handleClick} style={{ height: '50px', width: '80px' }}>
            Click here to unlock the duration  (10pts)
          </span>
          <p id='duration' style={{ marginLeft: '10px', display: 'none' }}>{movie.Runtime}</p>
        </div>
      </article>
    </>
  )
}

export default App
