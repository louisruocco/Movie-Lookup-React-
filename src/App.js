import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from "./movie"
import './App.css';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Inception");

  const url = `https://imdb-api.com/en/API/SearchMovie/${process.env.REACT_APP_KEY}/${query}`

  const getFilms = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setMovies(data.results);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }

  useEffect(() => {
    getFilms();
  }, [query])

  return (
      <div className = "App">
      <h1 className = "title">Movie Lookup</h1>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" className="search" value={search} placeholder="Search for a Movie..." onChange={updateSearch}/>
        <button className="search-btn">Search</button>
      </form>
      {movies.map(movie => (
         <Movie
            key={movie.id}
            title={movie.title}
            description={movie.description}
            image={movie.image}
         />
      ))}
      </div>
  )
}

export default App;