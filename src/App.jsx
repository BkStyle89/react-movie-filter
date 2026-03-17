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
  const [list,setList]=useState(movies)

  
  useEffect(() => {
    if(genre){


  const listaFiltrata = movies.filter(movie =>{
    return movie.genre == genre
  })

  setList(listaFiltrata)
  } else
    {
      setList(movies)
    }
  }, [genre]); 

  



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
          <ul>
            {list.map(movie=>(
              <li>{movie.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default App