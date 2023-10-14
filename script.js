let allMovies = [];

class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

function logToPage(message) {
    var logOutput = document.getElementById("logOutput");
    var logElement = document.createElement("p");
    logElement.textContent = message;
    logOutput.appendChild(logElement);
}

function printMovies() {
    logToPage("----------------");
    for (movie of allMovies) {
        logToPage(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched);
    }
}

let addMovieToLibrary = () => {
    let movie1 = new Movie("Parasite", 2, false);
    allMovies.push(movie1);
    logToPage("----------------");
    logToPage("A new movie is added");
}

let toggleWatchedStatus = (title) => {
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title === title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
            logToPage("----------------");
            logToPage("changing the status of the movie...");
            return;
        }
    }
}

let showHighRatedMovies = (rating) => {
    let count = 0;
    for (movie of allMovies) {
        if (movie.rating > rating) {
            logToPage(movie.title + " has a rating higher than " + rating);
            count++;
        }
    }
    logToPage("----------------");
    logToPage("\nIn total, there are " + count + " matches with a rating higher than " + rating);
}

// Test code - Initial movies
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);
logToPage("----------------");
logToPage("Running program......");
logToPage("----------------");
logToPage("Printing all movies....");
for (movie of allMovies) {
    logToPage(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched);
}
logToPage("\n You have " + allMovies.length + " movies in total");