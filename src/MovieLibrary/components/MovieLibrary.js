import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchTopRatedMovies} from '../store/actions'


import logo from './logo.svg'
import './MovieLibrary.css'
import {getMovies} from '../store/selectors'
import MoviesList from './MoviesList'

class MovieLibrary extends Component {

  static propTypes = {

  }

  componentDidMount() {
    const {fetchTopRatedMovies} = this.props
    fetchTopRatedMovies()
  }
  handleSortingChange = sortingType => console.log(sortingType)
  render() {
    const {movies} = this.props
    return (
      <div className="MovieLibrary">
        <header className="ML-header">
          <img src={logo} className="ML-logo" alt="logo" />
          <h1 className="ML-title">Movies</h1>
           <div>
            <span>Sort by:</span>
            <SortingOptions onChange={this.handleSortingChange}/>
          </div>
        </header>
        <div className="ML-intro">
          { movies.length && <MoviesList movies={movies}/> }
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  movies: getMovies(state)
}), {fetchTopRatedMovies})(MovieLibrary)


class SortingOptions extends Component {

  state = {
    value: ''
  }

  handleChange = e => {
    const selectedValue = e.target.value
    const {onChange} = this.props
    this.setState({value: selectedValue})
    onChange(selectedValue)
  }

  render() {

    return (
      <select value={this.state.value} onChange={this.handleChange}>
        <option value=""></option>
        <option value="name_asc">{'A -> Z'}</option>
        <option value="name_desc">{'Z -> A'}</option>
        <option value="rating">{'Rating'}</option>
      </select>
    )
  }
}