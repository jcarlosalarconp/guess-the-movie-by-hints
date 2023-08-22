import { useState } from 'react'
import movieJSON from './movie.json'
import './App.css'

function App() {

  const [movie, setMovie] = useState({})

  return (
    <>
      <h1>Guess the Movie by Hints</h1>
      <article className='movie-card'>
        <h2>{movieJSON.Title}</h2>
        <h4>{movieJSON.Genre}</h4>
        <div style={{ display: 'flex' }}>
          <img src={movieJSON.Poster} />
          <div style={{ marginLeft: '20px', width: '500px' }}>
            <p>{movieJSON.Plot}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
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
              <div>
                <p>{movieJSON.Director}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{display: 'flex'}}>
          <p>{movieJSON.Year}</p>
          <p style={{marginLeft: '10px'}}>{movieJSON.Runtime}</p>
        </div>
      </article>
    </>
  )
}

export default App
