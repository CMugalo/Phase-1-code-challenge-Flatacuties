// Your code here

document.addEventListener("DOMContentLoaded", () => {
  // Building elements and DOM Render Functions

  function renderOneCharacter(character) {
    // Add character names to DOM
    const card = document.createElement("span");
    card.textContent = character.name;
    document.querySelector("#character-bar").appendChild(card);

    // Adding click event listener
    card.addEventListener("click", (e) => {
      e.preventDefault;
      const gifOnDom = document.querySelector("#image");
      gifOnDom.src = character.image;
      const gifName = document.querySelector("#name");
      gifName.textContent = character.name;
      const gifVotes = document.querySelector("#vote-count");
      gifVotes.textContent = character.votes;
    });
  }
  /////////////////////////////////////////////////
  const votingForm = document.querySelector("#votes-form");
  votingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    totalVotes(e.target.votes.value);
    votingForm.reset();
  });
  ///////////////////////////////////////////////////

  // Displaying votes cast

  ///////////////////////////////////////////////////
  function totalVotes(animalVotes) {
    console.log(animalVotes);
    const displayVotes = document.querySelector("#vote-count");
    displayVotes.textContent = votesCast(animalVotes);
  }

  function votesCast(newVotes) {
    if (isNaN(newVotes)) {
      return alert("Votes must be a number!");
    } else {
      return newVotes;
    }
  }
  /////////////////////////////////////////////////

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
