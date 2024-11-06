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
  const shortSynopsis = synopsis.length > 200 ? synopsis.slice(0, 420) + "..." : synopsis;

  return (
    `<div class="anime-container">
      <div class="anime-info">
        <div class="anime-image">
          <img src="${data.images.jpg.large_image_url}">
        </div>
        <div class="anime-titles">
          <h1>${data.title}</h1>
          <h2>${data.title_english}</h2>
          <h2>${data.title_japanese}</h2>
          <p class="synopsis-text">${shortSynopsis}</p>
        </div>
      </div>
      <div class="trailer-container">
        <div class="trailer-content">
          <h2>Watch the trailer:</h2>
          <video controls width="500" poster=${data.trailer.images.large_image_url}>
            <source src="${data.trailer.url}" type="video/mp4">
            Seu navegador não suporta a reprodução de vídeos.
          </video>
        </div>
      </div>
    </div>`
  )
}

(async () => {
  await animeRenderSearch();
})()