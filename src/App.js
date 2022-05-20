import React, {useEffect, useState} from "react";
import Movie from "./movie"
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const url = `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_KEY}/The Dark Knight`

  const getFilms = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  useEffect(() => {
    getFilms();
  }, [])

  return (
    <div className = "App">
      <h1>Movie Lookup</h1>
      <form>
        <input type="text" className="search" value={search} placeholder="Search for a Movie..." onChange={updateSearch}/>
        <button className="search-btn">Search</button>
      </form>
      {movies.map(movie => (
         <Movie
            key={movie.title}
            title={movie.title}
            description={movie.description}
            image={movie.image}
         />
      ))}
    </div>
  )
}

export default App;