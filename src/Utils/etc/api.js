const BASEURL = "https://api.themoviedb.org";
const APIKEY ="54ffed57deb5a7a8688be4de3007e578"; // loading from json or env

export const apiGetMoviesByPage= (page) => {

    const url = BASEURL + '/3/movie/now_playing?api_key='+APIKEY+'&page='+page;

    const request = {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    return fetch(url, request)
        .then(response => response.json());

};