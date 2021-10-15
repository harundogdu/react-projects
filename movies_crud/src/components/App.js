import React from "react";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  // Fetch Api
  /* async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);
    const data = await response.json();
    this.setState({movies: data})
  }

   deleteMovie= async(movie)=>{
    const baseURL = "http://localhost:3002/movies";
    await fetch(baseURL+`/${movie.id}`,{
      method : "DELETE",
    });
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  } */

  // getMovies

  async getMovies() {
    try {
      const response = await axios.get("http://localhost:3002/movies");
      this.setState({ movies: response.data });
    } catch (error) {
      console.error(error);
    }
  }

  // first Render
  componentDidMount() {
    this.getMovies();
  }

  // Delete Movie
  deleteMovie = async (movie) => {
    await axios.delete(`http://localhost:3002/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  // Search Movie
  searchMovie = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  // Add Movie
  addMovie = async (movie) => {
    await axios.post(`http://localhost:3002/movies`, movie);
    this.setState((state) => ({ movies: state.movies.concat([movie]) }));
    this.getMovies();
  };

  // Update Movie
  updateMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie);
    this.getMovies();
  };

  // General render
  render() {
    let filteredMovie = this.state.movies
      .filter((movie) => {
        return (
          movie.name
            .toLowerCase()
            .indexOf(this.state.searchQuery.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
      });

    return (
      <Router>
        <Switch>
          <Route
            path="/edit/:id"
            render={(props) => (
              <EditMovie
                {...props}
                onEditMovie={(id, updatedMovie) => {
                  this.updateMovie(id, updatedMovie);
                }}
              />
            )}
          />

          <Route
            path="/add"
            render={({ history }) => (
              <AddMovie
                onAddMovie={(movie) => {
                  this.addMovie(movie);
                  history.location.pathname = "/";
                }}
              />
            )}
          />

          <Route
            path="/"
            exact
            render={() => (
              <React.Fragment>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />{" "}
                    </div>{" "}
                  </div>{" "}
                  <MovieList
                    movies={filteredMovie}
                    deleteMovieProp={(movie) => {
                      this.deleteMovie(movie);
                    }}
                  />{" "}
                </div>
              </React.Fragment>
            )}
          />
        </Switch>
      </Router>
    );
  }
}
