import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import TMDBImage from './TMDBImage'
import './MoviesList.css'

export default class MoviesList extends PureComponent {

  static propTypes = {
    movies: PropTypes.array.isRequired
  }

  state = {
    selectedMovie: null
  }

  handleSelectMovie = item => this.setState({selectedMovie: item})

  

  render() {

    const {movies} = this.props
    const {selectedMovie} = this.state

    return (
      <div className="movies-list">
        <div className="items">
         
          {
            movies.map(movie =>
              //<MovieListItem key={movie.id} movie={movie} isSelected={selectedMovie===movie} onSelect={this.handleSelectMovie}/>
              <ExpandedMovieItem  key={movie.id} movie={movie} />
            )
          }
        </div>
      
      </div>
    )
  }
}

const ExpandedMovieItem = ({movie: {title, original_title, poster_path, overview, vote_average, vote_count}}) => (
  <div className="expanded-movie-item">
    <TMDBImage src={poster_path} className="poster" />
  </div>
)

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



