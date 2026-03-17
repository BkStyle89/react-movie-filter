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
  
  const [genre, setGenre]=useState("") 
  const [film,setFilm]=useState(movies)

  
  useEffect(() => {
    /* console.log(genre); */
    /* if(genre== movies.filter(titolo=>(
      
      
    ))){
    } */

    
  }, [genre]); 
  /* console.log(titoloFiltrato); */
  



  return (
    <>
    
    <div className='container'>
      <div className='row'>
        <div className='col'>
         <label htmlFor="genre">Choose the genre:</label>
         <select name="filmGenre" value={genre} onChange={(e)=>setGenre(e.target.value)}>
          <option value="">tutti i film</option>
          {[...new Set(movies.map(movie => movie.genre))].map(genre => (
          <option key={genre} value={genre}>{genre}</option>
          ))}
         </select>
          <p>Film di categoria selezionato:{} </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App