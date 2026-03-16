import { useState, useEffect } from 'react'



const movies =
 [
   { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]



function App() {

const [films,setFilms] = useState(movies) 


  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
         <label htmlFor="genre">Choose the genre:</label>
         <select name="filmGenre" id="filmGenre">
         {movies.map(movie =>(
          <option value="Fantascenza">{movie.genre}</option>
        ))}
         </select>
          <p>categoria film selezionato </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App