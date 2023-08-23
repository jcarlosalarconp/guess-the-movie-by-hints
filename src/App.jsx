import { useState } from 'react'
import movieJSON from './movie.json'
import './App.css'

function App() {

  const [movie, setMovie] = useState({})
  const [score, setScore] = useState(0)

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

  return (
    <>
      <h1>Guess the Movie by Hints</h1>
      <div style={{ display: 'flex' }}>
        <h1>SCORE:</h1>
        <h1 style={{ color: 'red', marginLeft: '10px'}}>{score}</h1>
      </div>
      <article className='movie-card'>
        <span id='title-hint' className='hint' onClick={handleClick} style={{ height: '40px' }}>
          Click here to unlock the title (25pts)
        </span>
        <h2 id='title' style={{ display: 'none' }}>{movieJSON.Title}</h2>

        <span id='genre-hint' className='hint' onClick={handleClick} style={{ height: '40px', width: '300px' }}>
          Click here to unlock the genre (5pts)
        </span>
        <h4 id='genre' style={{ display: 'none' }}>{movieJSON.Genre}</h4>

        <div style={{ display: 'flex' }}>
          <span id='poster-hint' className='hint' onClick={handleClick} style={{ height: '444px', width: '300px' }}>
            Click here to unlock the poster (50pts)
          </span>
          <img id='poster' style={{ display: 'none' }} src={movieJSON.Poster} />
          <div style={{ marginLeft: '20px', width: '500px' }}>

            <span id='synopsis-hint' className='hint' onClick={handleClick} style={{ height: '150px' }}>
              Click here to unlock the synopsis (30pts)
            </span>
            <p id='synopsis' style={{ display: 'none' }}  >{movieJSON.Plot}</p>



            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span id='actors-hint' className='hint' onClick={handleClick} style={{ height: '150px', width: '200px' }}>
                Click here to unlock the actors (40pts)
              </span>
              <div id='actors' style={{ display: 'none' }}>
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

              <span id='director-hint' className='hint' onClick={handleClick} style={{ height: '150px', width: '200px' }}>
                Click here to unlock the director (40pts)
              </span>
              <div id='director' style={{ display: 'none' }}>
                <p>{movieJSON.Director}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <span id='year-hint' className='hint' onClick={handleClick} style={{ height: '50px', width: '80px' }}>
            Click here to unlock the year (20pts)
          </span>
          <p id='year' style={{ display: 'none' }}>{movieJSON.Year}</p>

          <span id='duration-hint' className='hint' onClick={handleClick} style={{ height: '50px', width: '80px' }}>
            Click here to unlock the duration  (10pts)
          </span>
          <p id='duration' style={{ marginLeft: '10px', display: 'none' }}>{movieJSON.Runtime}</p>
        </div>
      </article>
    </>
  )
}

export default App
