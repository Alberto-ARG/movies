import React, { Component, useState } from 'react'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'
import MovieLibrary from './MovieLibrary'

import classNames from 'classnames'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)



class App extends Component {

  
   
  movieSelect = (movie)=>{
    
    this.setState({dataModal: movie})
    console.log(movie);
  }
  render() {
    
    return (
      <Provider store={store}>
        <MovieLibrary selectedMovie={this.movieSelect} />   
        <ModalMovie active={false}/>   
      </Provider>
    )
  }
}
class ModalMovie extends Component {
  /*
    handleClick = () => {
      const {movie, onSelect} = this.props
      onSelect(movie)
    }*/
  
    render() {
      const { active,data} = this.props
      return (
       // <div className={classNames('movie-list-item', {'selected': isSelected})} onClick={this.handleClick}>{title}({vote_average})</div>
       <div className={classNames('notvisible', {'visible': active})}>
        <div className="modal">
        
        </div>
         <div className="background-modal">
  
         </div>
      </div>
      )
    }
  }

export default App
