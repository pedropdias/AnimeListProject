const titleMenuListSeasons = document.querySelector(".titleMenuListSeasons");
const seasonAnimeList = document.querySelector(".seasonAnimesList");

const searchListIconInline = document.querySelector("#searchListIconInline");
const searchListIconGrid = document.querySelector("#searchListIconGrid");


window.addEventListener("scroll", function(){
  let header = document.querySelector(".header")
  header.classList.toggle('roll', window.scrollY > 0)
})

searchListIconInline.onclick = () => {
  searchListIconInline.style.backgroundColor = "white";
  searchListIconInline.style.color = "rgb(26, 26, 26)";
  searchListIconGrid.style.backgroundColor = "";
  searchListIconGrid.style.color = "white";
  seasonAnimeList.classList.remove("searchListGrid");
}

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
    return(
      `<div class="animeItem">
        <img width="120px" src="${item.images.jpg.image_url}" class="animeImg" alt="">
        <div class="animeTitleWrapper">
          <h1 class="animeTitle">
          <a href="index.html">
            ${item.title}
          </a>  
          </h1>
          <h2 class="animeEnglishTitle">
          <a href="index.html" target="_blank">
            ${item.title_english ? item.title_english : ""}
          </a>
          </h2>
        </div>
      </div>`
    )
  }).join('');
}



(async () => {
  await renderSeason();
})();



