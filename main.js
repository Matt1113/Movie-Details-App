const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=a5be09dd&t=';

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function getMovie(movie) {
    const response = await fetch(url + movie);
    let data = await response.json();

    document.querySelector(".movie img").src = data.Poster
    document.querySelector(".title").innerHTML = "Title: " + data.Title;
    document.querySelector(".year").innerHTML = "Year: " + data.Year;
    document.querySelector(".runtime").innerHTML = "Running Time: " + data.Runtime;
    document.querySelector(".director").innerHTML = "Director: " + data.Director;

    document.querySelector(".imbd").innerHTML = data.imdbRating;
    document.querySelector(".rtc").innerHTML = (data.Ratings.length < 2) ? "Not available" : data.Ratings[1].Value;
    document.querySelector(".mc").innerHTML = (data.Ratings.length < 3) ? "Not available" : data.Ratings[2].Value;

    document.querySelector(".description p").innerHTML = data.Plot;

    document.querySelector(".movie").style.display = "flex";
    document.querySelector(".ratings").style.display = "flex";
    document.querySelector(".description").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    getMovie(searchBox.value);
})

searchBox.addEventListener("keypress", ()=>{
    if (event.key == "Enter") {
        getMovie(searchBox.value);
    }
})