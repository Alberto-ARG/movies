import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'

import TMDBImage from './TMDBImage'
import './MoviesList.css'

export default class MoviesList extends PureComponent {

 
  static propTypes = {
    movies: PropTypes.array.isRequired
  }

  state = {
    selectedMovie: null
  }

  handleSelectMovie = (item) => {
    const {selectMovie} = this.props
    //this.setState({selectedMovie: item});;
    selectMovie(item);
    
    
    
  }

  
   
  render() {

    const {movies} = this.props
    const {selectedMovie} = this.state

    return (
      <div className="movies-list">
        <div className="items">
         
          {
            movies.map(movie =>
              //<MovieListItem key={movie.id} movie={movie} />
              <ExpandedMovieItem  key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={this.handleSelectMovie}/>
            )
          }
        </div>
      
      </div>
    )
  }
}


class ExpandedMovieItem extends Component {

  handleClick = () => {
    const {movie, onSelect} = this.props
    onSelect(movie);
  }

  render() {
    const {movie: { poster_path}} = this.props
    return (
      <div className="expanded-movie-item">
         <TMDBImage src={poster_path} className="poster" onClick={this.handleClick}/>
      </div>

    )
  }
}
/*
class MovieListItem extends Component {

  handleClick = () => {
    const {movie, onSelect} = this.props
    onSelect(movie)
  }

  render() {
    const {movie: {title, vote_average}, isSelected} = this.props
    return (
      <div className={classNames('movie-list-item', {'selected': isSelected})} onClick={this.handleClick}>{title}({vote_average})</div>
    )
  }
}
*/

