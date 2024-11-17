const myListContainer = document.querySelector("#my-list-container");
let myList = JSON.parse(localStorage.getItem("myAnimeList")) || [];

console.log(myList)

const animeRender = async (animeId) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
  .then(response => response.json())
  .then(json => json)
  .catch(error => console.log(error))

  const anime = response.data
  const animeLink = `anime.html?id=${anime.mal_id}`;
  const maxSynopsisLength = 150;

  if (anime.synopsis && anime.synopsis.length > maxSynopsisLength) {
        anime.synopsis = anime.synopsis.substring(0, maxSynopsisLength) + "...";
      }

  myListContainer.innerHTML += 
  `<div id=${anime.mal_id} class="animeItem">
    <div class="anime-info">
      <a href="./Pages/${animeLink}">
      <img width="120px" src="${anime.images.jpg.image_url}" class="animeImg" alt="">
      </a>
      <div class="animeTitleWrapper">
        <h1 class="animeTitle">
        <a href="./Pages/${animeLink}">
          ${anime.title}
        </a>  
        </h1>
        <h2 class="animeEnglishTitle">
        <a href="./Pages/${animeLink}">
          ${anime.title_english ? anime.title_english : ""}
        </a>
        </h2>
        <p class="animeSynopsis">
          <a href="./Pages/${animeLink}">
            ${anime.synopsis ? anime.synopsis : ""}
          </a>
        </p>
      </div>
    </div>
    <div class="circle-xmark-container">
      <button class="fa-regular fa-circle-xmark circle-xmark-button" animeId=${anime.mal_id}></button>
    </div>
  </div>`
}

export const renderMyList = (myList) => {
  myList.forEach((animeId) => {
    animeRender(animeId);
  });
};

(async () => {
  await renderMyList(myList);
})()