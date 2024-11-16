const myListContainer = document.querySelector("#my-list-container");
let myList = JSON.parse(localStorage.getItem("myAnimeList")) || [];

console.log(myList)

const animeRender = async (animeId) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
  .then(response => response.json())
  .then(json => json)
  .catch(error => console.log(error))

  const anime = response.data

  myListContainer.innerHTML += 
  `<div class="anime-box">
    <img src=${anime.images.jpg.large_image_url}>
    <div class="anime-info">
      <h1>${anime.title}</h1>
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