const titleMenuListSeasons = document.querySelector(".titleMenuListSeasons");
const seasonAnimeList = document.querySelector(".seasonAnimesList");

const searchListIconInline = document.querySelector("#searchListIconInline");
const searchListIconGrid = document.querySelector("#searchListIconGrid");


window.addEventListener("scroll", function(){
  let header = document.querySelector(".header")
  header.classList.toggle('roll', window.scrollY > 0)
})

// Remove searchListGrid class
searchListIconInline.onclick = () => {
  searchListIconInline.style.backgroundColor = "white";
  searchListIconInline.style.color = "rgb(26, 26, 26)";
  searchListIconGrid.style.backgroundColor = "transparent";
  searchListIconGrid.style.color = "white";
  seasonAnimeList.classList.remove("searchListGrid");
}

// Add searchListGrid class
searchListIconGrid.onclick = () => {
  searchListIconGrid.style.backgroundColor = "white";
  searchListIconGrid.style.color = "rgb(26, 26, 26)";
  searchListIconInline.style.backgroundColor = "transparent";
  searchListIconInline.style.color = "white";
  seasonAnimeList.classList.add("searchListGrid");
}

const searchSeason = async () => {
  const response = await fetch('https://api.jikan.moe/v4/seasons/now')
                        .then(response => response.json())
                        .then(json=> json)
                        .catch(erro=> console.log(erro));
  console.log(response);
  return response
}



const renderSeason = async () => {
  const searchResultSeason = await searchSeason();

  // Season Title innerHTML
  titleMenuListSeasons.innerHTML = `${searchResultSeason.data[0].season} Season`;

  seasonAnimeList.innerHTML = searchResultSeason.data.map((item) => {

    const animeLink = `anime.html?id=${item.mal_id}`;
    const maxSynopsisLength = 150;

      if (item.synopsis && item.synopsis.length > maxSynopsisLength) {
        item.synopsis = item.synopsis.substring(0, maxSynopsisLength) + "...";
      }

    return(
      `<div class="animeItem">
        <a href="../Pages/${animeLink}">
          <img width="120px" src="${item.images.jpg.image_url}" class="animeImg" alt="">
        </a>
        <div class="animeTitleWrapper">
          <h1 class="animeTitle">
            <a href="../Pages/${animeLink}">
              ${item.title}
            </a>  
          </h1>
          <h2 class="animeEnglishTitle">
            <a href="../Pages/${animeLink}">
              ${item.title_english ? item.title_english : ""}
            </a>
          </h2>
          <p class="animeSynopsis">
              <a href="../Pages/${animeLink}">
                ${item.synopsis ? item.synopsis : ""}
              </a>
            </p>
        </div>
        <button class="favorite-button" animeId=${item.mal_id}></button>
      </div>`
    )
  }).join('');
}



(async () => {
  await renderSeason();
})();



