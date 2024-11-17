const mainContainer = document.querySelector("#main-container");
const pageUrl = new URL(window.location.href);
const animeId = pageUrl.searchParams.get("id");

const animeRenderSearch = async () => {
  
  const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/full`)
  .then(response => response.json())
  .then(json => json)
  .catch(error => console.log(error))
  
  console.log(response)

  mainContainer.innerHTML = animeInnerHTML(response.data)
}

const animeInnerHTML = (data) => {

  const synopsis = data.synopsis;
  let shortSynopsis = "";

  if (synopsis) {
    shortSynopsis = synopsis.length > 200 ? synopsis.slice(0, 420) + "..." : synopsis;
  }

  let trailerUrl = data.trailer.url
  if (trailerUrl) {
    trailerUrl = trailerUrl.replace("watch?v=", "embed/")
  }

  return (
    `<div class="anime-container">
      <div class="anime-info">
        <div class="anime-image">
          <img src="${data.images.jpg.large_image_url}">
        </div>
        <div class="anime-titles-box">
          <div class="anime-titles">
          <h1>${data.title ? data.title : "title not found :/"}</h1>
          <h2>${data.title_english ? data.title_english : ""}</h2>
          <h2>${data.title_japanese ? data.title_japanese : ""}</h2>
          <p class="synopsis-text">${shortSynopsis}</p>
          </div>
          <div class="favorite-box">
            <p>Add to my list</p>
            <button class="fa-regular fa-heart favorite-button" animeId=${data.mal_id}></button>
          </div>
        </div>
      </div>
      <div class="trailer-container">
        <div class="trailer-content">
          <h2>${trailerUrl ? "Watch the trailer:" : ""}</h2>
          <iframe src="${trailerUrl ? trailerUrl : ""}"
                  title="YouTube video player" frameborder="0" allow="accelerometer;
                  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                  web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>`
  )
}

(async () => {
  await animeRenderSearch();
})()