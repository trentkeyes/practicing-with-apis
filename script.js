const img = document.querySelector("img");
const button = document.getElementById("newImage");
const search = document.getElementById("search");
const msg = document.createElement("p");
document.body.append(msg);

async function fetchCats() {
  msg.textContent = "";
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=hEw7hKz35SNX5wpUhONAFKY6k4x3IqKP&s=cats",
    { mode: "cors" }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}

async function gifSearch(e) {
  try {
    if (e.key === "Enter") {
      msg.textContent = "";
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=hEw7hKz35SNX5wpUhONAFKY6k4x3IqKP&s=${e.target.value}`,
        { mode: "cors" }
      );
      const searchResponse = await response.json();
      img.src = searchResponse.data.images.original.url;
    }
  } catch (error) {
    handleError();
  }
}

async function fetchSadGif() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=hEw7hKz35SNX5wpUhONAFKY6k4x3IqKP&s=sad`,
    { mode: "cors" }
  );
  const sadData = await response.json();
  img.src = sadData.data.images.original.url;
}

const handleError = () => {
  msg.textContent = "Oops... No gifs were found. Try again!";
  fetchSadGif();
};

button.addEventListener("click", fetchCats);
search.addEventListener("keypress", gifSearch);
fetchCats();
