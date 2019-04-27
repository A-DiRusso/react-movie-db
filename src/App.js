import React from 'react';
import './App.css';
import movies from './movies';
import GenreList from './GenreList';
import MovieList from './MovieList';
import ActorList from './ActorList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: '',
      movie: ''
    }
  }
  
  render() {
    // console.log(Object.keys(movies));
    return (
      <div className="App">
        <header className="App-header">
          <GenreList 
            genres={Object.keys(movies)} 
            handleClick={this._setGenre}
            />
          
          
          {
            this.state.genre ? <MovieList 
                                  movies={Object.keys(movies[this.state.genre])} 
                                  handleClick={this._setMovie}
                                /> 
                                : null
          }
          {
            this.state.movie ? <ActorList
                                    actors={movies[this.state.genre][this.state.movie]}
                                />
                                : null
          }
           
        </header>
      </div>
    );
  }
          
  //Helper functions should be defined 
  //in the same class that the state is
  _setGenre = (genre) => {
    this.setState({
      //when the key and the value are the same word 
      //you can omit the colon and the key
      //genre: genre
      genre,
      movie: ''
    });
  }
  _setMovie = (movie) => {
    this.setState({
      movie
    })
  }

}

export default App;

