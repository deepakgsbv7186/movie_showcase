import {API} from './api.js';
const API_KEY = `api_key=${API}`;
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/movie/top_rated?' + API_KEY;
// const API_URL = BASE_URL + '/movie/popular?' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/original';
const poster_number = document.getElementById('poster_img');
// console.log(API_URL);
let next = 0;
poster_number.addEventListener("click", () =>{
    // movie call
    getMovies(API_URL)
    .then(data => showMovie(data.results, next++));  
})
// fetch api data with promise
async function getMovies(url){
    try{
        let response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(`ERROR: ${error}`);
    }
}
// process movie data
function showMovie(movieData, next){
    const {title, poster_path, overview, backdrop_path} = movieData[next];

    const titleH2 = document.getElementById('title');
    const overviewP = document.getElementById('overview');
    let movieImg = document.getElementById('show_img');
    let posterImg = document.getElementById('poster_img');

    titleH2.innerText = title;
    movieImg.src = IMG_URL+backdrop_path;
    posterImg.src = IMG_URL+poster_path;
    overviewP.innerText = overview;
}