// import { renderMyList } from "./myList";

const favoriteButton = document.querySelector(".favorite-button");
const body = document.body;


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
        window.alert("Anime added to my list.")
      } else {
        window.alert("Anime already in my list.")
      }

      targetClassList.remove("fa-regular");
      targetClassList.add("fa-solid");

    } else if (targetClassList.contains("fa-solid")) {
      if (myList.includes(animeId)) {
        myList = myList.filter(id => id !== animeId);
        localStorage.setItem("myAnimeList", JSON.stringify(myList));
        window.alert("Anime has been removed from my list.")
      }
      targetClassList.remove("fa-solid");
      targetClassList.add("fa-regular");
    }
  }
//   if (window.location.pathname === '/list.html') {
//   renderMyList();
// }
});

