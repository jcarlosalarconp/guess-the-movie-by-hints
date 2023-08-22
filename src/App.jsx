import { useState } from 'react'
import movieJSON from './movie.json'
import './App.css'

function App() {

  const [movie, setMovie] = useState({})

  const handleClick = (e) => {
    e.target.style.display = 'none'
    switch (e.target.id) {
      case 'title-hint':
        document.getElementById('title').style.display = 'block'
        break
      case 'genre-hint':
        document.getElementById('genre').style.display = 'block'
        break
      case 'poster-hint':
        document.getElementById('poster').style.display = 'block'
        break
      case 'synopsis-hint':
        document.getElementById('synopsis').style.display = 'block'
        break
      case 'actors-hint':
        document.getElementById('actors').style.display = 'block'
        break
      case 'director-hint':
        document.getElementById('director').style.display = 'block'
        break
      case 'year-hint':
        document.getElementById('year').style.display = 'block'
        break
      case 'duration-hint':
        document.getElementById('duration').style.display = 'block'
        break
    }
  }

  return (
    <>
      <h1>Guess the Movie by Hints</h1>
      <article className='movie-card'>
        <span id='title-hint' className='hint' onClick={handleClick} style={{ height: '40px' }}>
          Click here to unlock the title
        </span>
        <h2 id='title' style={{ display: 'none' }}>{movieJSON.Title}</h2>

        <span id='genre-hint' className='hint' onClick={handleClick} style={{ height: '40px', width: '300px' }}>
          Click here to unlock the genre
        </span>
        <h4 id='genre' style={{ display: 'none' }}>{movieJSON.Genre}</h4>

        <div style={{ display: 'flex' }}>
          <span id='poster-hint' className='hint' onClick={handleClick} style={{ height: '444px', width: '300px' }}>
            Click here to unlock the poster
          </span>
          <img id='poster' style={{ display: 'none' }} src={movieJSON.Poster} />
          <div style={{ marginLeft: '20px', width: '500px' }}>

            <span id='synopsis-hint' className='hint' onClick={handleClick} style={{ height: '150px' }}>
              Click here to unlock the synopsis
            </span>
            <p id='synopsis' style={{ display: 'none' }}  >{movieJSON.Plot}</p>



            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span id='actors-hint' className='hint' onClick={handleClick} style={{ height: '150px', width: '200px'}}>
              Click here to unlock the actors
            </span>
              <div id='actors' style={{display: 'none'}}>
                <ul>
                  {
                    movieJSON.Actors.split(', ').map(actor => {
                      return (
                        <>
                          <li>{actor}</li>
                        </>
                      )
                    })
                  }
                </ul>
              </div>

              <span id='director-hint' className='hint' onClick={handleClick} style={{ height: '150px', width: '200px'}}>
              Click here to unlock the director
            </span>
              <div id='director' style={{display: 'none'}}>
                <p>{movieJSON.Director}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
        <span id='year-hint' className='hint' onClick={handleClick} style={{ height: '50px', width: '80px'}}>
              Click here to unlock the year
            </span>
          <p id='year' style={{display: 'none'}}>{movieJSON.Year}</p>

        <span id='duration-hint' className='hint' onClick={handleClick} style={{ height: '50px', width: '80px'}}>
              Click here to unlock the duration
            </span>
          <p id='duration' style={{ marginLeft: '10px', display: 'none' }}>{movieJSON.Runtime}</p>
        </div>
      </article>
    </>
  )
}

export default App
