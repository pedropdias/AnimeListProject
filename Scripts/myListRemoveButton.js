import { body } from "./favoriteButton.js";
import { showRemoveAlert } from "./customAlert.js";

body.addEventListener("click", (event) => {
  const targetClassList = event.target.classList;
  const animeId = event.target.getAttribute("animeId");
  let myList = JSON.parse(localStorage.getItem("myAnimeList")) || [];

  if (targetClassList.contains("fa-circle-xmark")) {
    if (myList.includes(animeId)) {
      myList = myList.filter(id => id !== animeId);
      localStorage.setItem("myAnimeList", JSON.stringify(myList))
      showRemoveAlert("The anime has been removed from my list")
      const animeItem = document.getElementById(`${animeId}`)
      
      if (animeItem) {
        animeItem.remove();
      } else {
        console.log("Element not found.");
      }
    }
  }
})