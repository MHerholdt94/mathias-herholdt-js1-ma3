const container = document.querySelector(".container");

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=8d44b42f9c764d1e8b67f20934b59016";

async function apiCall() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const results = data.results;

    container.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      if (i === 8) {
        break;
      }

      container.innerHTML += `<div class="result">
                                <p class="game-title">${results[i].name}</p>
                                <p>Rating: ${results[i].rating}</p>
                                <p>${results[i].tags.length} tags</p>
                              </div>`;
    }
  } catch (error) {
    console.log(error);

    // The errorMessage function is in a separate .js file
    // I am unsure if that is fine since in the assignment says
    // to have the answer to question 2 in a file on its own.

    container.innerHTML = errorMessage("An error occured when calling the API");
  }
}

apiCall();
