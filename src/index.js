// Your code here

// Building elements and DOM Render Functions

function renderOneCharacter(character) {
  let card = document.createElement("span");
  card.textContent = `${character.name}`;

  // Add character names to DOM
  document.querySelector("#character-bar").appendChild(card);
}

// Fetch request for the character resources
function getAllCharacters() {
  fetch("http://localhost:3000/characters")
    .then((res) => res.json())
    .then((characters) =>
      characters.forEach((character) => renderOneCharacter(character))
    );
}

// Get character data, add them inside the div with span tags, and load them to the DOM

function initialize() {
  getAllCharacters();
  // characters.forEach((character) => renderOneCharacter(character));
}
initialize();
 