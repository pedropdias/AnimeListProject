const searchButton = document.querySelector(".searchButton");
const cancelButton = document.querySelector(".cancelButton");
const searchBox = document.querySelector(".searchBox");
const searchInput = document.querySelector("#searchInput");
const searchData = document.querySelector(".searchData");

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
  searchData.classList.add("active");
}