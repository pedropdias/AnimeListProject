console.log("rodando")
const searchList = document.querySelector("#searchList")


searchList.addEventListener("click", (event) => {
  console.log("aqui")
  if (event.target.classList.contais("fa-regular")) {
    event.target.classList.remove("fa-regular")
    event.target.classList.add("fa-solid")
    console.log("aqui2")
  } else {
    event.target.classList.remove("fa-solid")
    event.target.classList.add("fa-regular")
    console.log("aqui3")
  }
})