//Testing for errors
const ifError = (response) => {
	if (!response.ok) {
		throw `${respose.status}:${respose.statusText}`;
	}
	return response.json();
};

const getTitle = document //Creating an event
	.querySelector("#search")
	.addEventListener("click", function (e) {
		console.log(e);
		getValue = document.querySelector("#getTitle").value;
		console.log(getValue);
		const searchUrl = `http://www.omdbapi.com/?s=${getValue}&apikey=6af36fd1`; //This API URL contains 's=' - this means searching by title. And my personal API key required
		const createRequest = (url) => {
			fetch(url)
				.then((response) => ifError(response)) //Testing for errors
				.then((data) => {
					const objectdata = data; //Creating constants for all the received data from fetching
					console.log(objectdata);
					const givemeTitle = objectdata.Search[0].Title;
					console.log(givemeTitle);
					const givemeYear = objectdata.Search[0].Year;
					console.log(givemeYear);
					const givemeimdbID= objectdata.Search[0].imdbID;
					console.log(givemeimdbID);
					const givemePoster= objectdata.Search[0].Poster;
					console.log(givemePoster);
					const printHtml = document.querySelector(".movie-big"); //Inserting the selected data into the HTML fields
					printHtml.innerHTML = 
					`<img src="${givemePoster}">
					<h2>${givemeTitle}</h2>
					<p>Year: ${givemeYear}</p>
					<a href="https://www.imdb.com/title/${givemeimdbID}/" target="_blank">IMDb</a>`;
				});
		};
		createRequest(searchUrl); //Running the function
	});
