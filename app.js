const searchInput = document.getElementById("pokemonInput");
const searchButton = document.getElementById("search-btn");
const pokemonSpriteElement = document.querySelector("#pokemon-sprite");
const pokemonTitleFetch = document.querySelector("#pokemon-name");
const pokemonHeight = document.querySelector("#pokemon-height");

searchButton.addEventListener("click", fetchData);

async function fetchData() {
  const pokemonName = searchInput.value.toLowerCase();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch!");
    }

    const data = await response.json();
    console.log(data);
    const pokemonSprite = data.sprites.front_default;
    pokemonSpriteElement.src = pokemonSprite;
    pokemonSpriteElement.classList.remove("d-none");
    pokemonTitleFetch.textContent = data.name;
    pokemonHeight.textContent = `Height: ${data.height}`;
  } catch (error) {
    console.error(error);
    alert(error);
  }
}
