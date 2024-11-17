import { showAddAlert, showRemoveAlert } from "./customAlert.js";

const favoriteButton = document.querySelector(".favorite-button");
export const body = document.body;


body.addEventListener("click", (event) => {

  // Confere se o elemento é um ícone válido
  if (event.target.classList.contains("fa-heart")) {
    const targetClassList = event.target.classList;
    const animeId = event.target.getAttribute("animeId");
    let myList = JSON.parse(localStorage.getItem("myAnimeList")) || [];

    console.log(localStorage)

    // Troca a classe do ícone clicado
    if (targetClassList.contains("fa-regular")) {
      if (!myList.includes(animeId)) {
        myList.push(animeId);
        localStorage.setItem("myAnimeList", JSON.stringify(myList));
        targetClassList.remove("fa-regular");
        targetClassList.add("fa-solid");
        showAddAlert("Anime added to my list");
      } else {
        targetClassList.remove("fa-regular");
        targetClassList.add("fa-solid");
        showAddAlert("Anime already in my list.")
      }

      

    } else if (targetClassList.contains("fa-solid")) {
      if (myList.includes(animeId)) {
        myList = myList.filter(id => id !== animeId);
        localStorage.setItem("myAnimeList", JSON.stringify(myList));
        targetClassList.remove("fa-solid");
        targetClassList.add("fa-regular");
        showRemoveAlert("The anime has been removed from my list")
      }
    }
  }
});

