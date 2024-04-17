// Your code here
document.addEventListener("DOMContentLoaded", () => {
  // Building elements and DOM Render Functions

  function renderOneCharacter(character) {
    // Add character names to DOM
    let card = document.createElement("span");
    card.textContent = character.name;
    document.querySelector("#character-bar").appendChild(card);

    // Add event listener on click
    card.addEventListener("click", (e) => {
      e.preventDefault;
      let gifOnDom = document.querySelector("#image");
      gifOnDom.src = character.image;
      let gifName = document.querySelector("#name");
      gifName.textContent = character.name;
      let gifVotes = document.querySelector("#vote-count");
      gifVotes.textContent = character.votes;
    });
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
  }
  initialize();
});
