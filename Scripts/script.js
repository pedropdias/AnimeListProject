const searchButton = document.querySelector(".searchButton");
const cancelButton = document.querySelector(".cancelButton");
const searchBox = document.querySelector(".searchBox");
const searchInput = document.querySelector("#searchInput");
const searchData = document.querySelector(".searchData");
const banner = document.querySelector(".banner");
const titleBanner = document.querySelector(".titleBanner");

//consts searchList
const containerList = document.querySelector(".containerList");
const searchList = document.querySelector("#searchList");
const animeTitle = document.querySelector(".animeTitle");
const animeJapTitle = document.querySelector(".animeJapTitle");
const episodes = document.querySelector(".episodes");
const genres = document.querySelector(".genres");
const animeImg = document.querySelector(".animeImg");
const studios = document.querySelector(".studios");
const aired = document.querySelector(".aired");
const synopsis = document.querySelector(".synopsis");
const animeUrl = document.querySelector(".animeUrl");
const searchListIconInline = document.querySelector("#searchListIconInline");
const searchListIconGrid = document.querySelector("#searchListIconGrid");

// page scroll

window.addEventListener("scroll", function(){
  let header = document.querySelector(".header")
  header.classList.toggle('roll', window.scrollY > 0)
})



searchButton.onmouseover = () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchButton.classList.add("active");
  cancelButton.classList.add("active");
}

cancelButton.onclick = () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchButton.classList.remove("active");
  cancelButton.classList.remove("active");
  searchData.classList.remove("active");
  searchInput.value = "";
}

searchButton.onclick = () => {
  // searchData.classList.add("active");
  if(searchInput.value.length != 0){
    searchAnime();
    renderSearch();
    titleBanner.style.display = "block";
    titleBanner.innerHTML = "Searching..."
  }else{
    console.log(searchInput.value.length);
  }
}

searchListIconInline.onclick = () => {
  searchListIconInline.style.backgroundColor = "white";
  searchListIconInline.style.color = "rgb(26, 26, 26)";
  searchListIconGrid.style.backgroundColor = "";
  searchListIconGrid.style.color = "white";
  searchList.classList.remove("searchListGrid");
}

searchListIconGrid.onclick = () => {
  searchListIconGrid.style.backgroundColor = "white";
  searchListIconGrid.style.color = "rgb(26, 26, 26)";
  searchListIconInline.style.backgroundColor = "transparent";
  searchListIconInline.style.color = "white";
  searchList.classList.add("searchListGrid");
}

searchInput.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    if(searchInput.value.length != 0){
      searchAnime();
      renderSearch();
      titleBanner.style.display = "block";
      titleBanner.innerHTML = "Searching..."
    }else{
      console.log(searchInput.value.length);
    }
  }
});

const searchAnime = async () => {
  const query = searchInput.value.replaceAll(" ", "+");
  const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
                      .then(response => response.json())
                      .then(json => json)
                      .catch(erro => console.log(erro));
  titleBanner.style.display = "none";
  console.log(response);
  return response
}


const renderSearch = async () => {
  // await searchAnime();

  const searchResult = await searchAnime();
  console.log(searchResult);

  if(searchResult.data.length > 0) {
    searchListIconInline.style.display = "inline-block";
    searchListIconGrid.style.display = "inline-block";
    document.getElementById("searchResultText").innerHTML = `<h1>Search Results for "${searchInput.value}"</h1>`;
    document.getElementById("searchList").innerHTML = searchResult.data.map((item) => {

      const animeLink = `anime.html?id=${item.mal_id}`;

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
          </div>
        </div>`
      )
    }).join('');
  } else {
    document.getElementById("searchList").innerHTML = '<h1 class="animeTitle">No anime today :/</h1>';
  }
}
