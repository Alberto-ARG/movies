import React, { Component } from 'react'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'
import MovieLibrary from './MovieLibrary'
import ModalComponent from './Utils/ModalComponent';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)



class App extends Component {

  
  /* 
  movieSelect = (movie)=>{
    
    this.setState({dataModal: movie})
    console.log(movie);
  }*/
  render() {
    
    return (
      //<MovieLibrary selectedMovie={this.movieSelect} />   
      //<ModalMovie active={false}/>   
      <Provider store={store}>
        <MovieLibrary/>   
        <ModalComponent active={false}/>   
      </Provider>
    )
  }
}


export default App
