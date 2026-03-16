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

/* const [films,setFilms] = useState(movies) */


  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
         <label htmlFor="genre">Choose the genre:</label>
         <select name="filmGenre" id="filmGenre">
          <option value="Fantascenza">Fantascenza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
         </select>
         {movies.filter(movie=>movie.genre(
           <p>film del genere scelto:{movie.title}</p>        
         ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
