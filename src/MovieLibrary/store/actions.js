import {FETCH_MOVIES} from '../../actionTypes'
import * as http from '../../Utils/etc/api'

export const fetchTopRatedMovies = (pagina) => async (dispatch) => {
  try {
  
   
    let res1 = await http.apiGetMoviesByPage(1);
    let res2 = await http.apiGetMoviesByPage(2);
    let res3 = await http.apiGetMoviesByPage(3);
    let allMovies=[];
    allMovies = allMovies.concat(res1.results,res2.results,res3.results)

    dispatch({
      type: FETCH_MOVIES,
      payload: allMovies,
    });

    return Promise.resolve(allMovies);
  } catch (err) {
    return Promise.reject(err);
  }
};