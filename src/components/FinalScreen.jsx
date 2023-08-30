import '../App.css'

export function FinalScreen({ movie, score }) {
    return (
        <>
            <section className='final-screen'>
                <div style={{backgroundColor: 'azure'}}>
                    <h1 style={{color: 'black'}}>You win! Score: {score}</h1>
                    <article className='movie-card'>

                        <h2 id='title'>{movie.Title}</h2>

                        <h4 id='genre'>{movie.Genre}</h4>

                        <div style={{ display: 'flex' }}>
                            <img id='poster' src={movie.Poster} />
                            <div style={{ marginLeft: '20px', width: '500px' }}>

                                <p id='synopsis'  >{movie.Plot}</p>



                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div id='actors'>
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

                                    <div id='director'>
                                        <p>{movie.Director}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <p id='year'>{movie.Year}</p>
                            <p id='duration' style={{ marginLeft: '10px'}}>{movie.Runtime}</p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}