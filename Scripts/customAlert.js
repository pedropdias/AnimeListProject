export function showAddAlert(message) {
    // Seleciona o contêiner
    const body = document.body;

    if (!document.body.querySelector(".custom-add-alert")) {
      body.innerHTML +=
      `<div class="custom-add-alert">
        <p>${message}<i class="fa-solid fa-check"></i></p>
        
      </div>`
    }

    const customAlert = document.querySelector(".custom-add-alert")

    setTimeout(() => {
        customAlert.classList.add("fade-out");
        setTimeout(() => {
            customAlert.remove();
        }, 1000);
    }, 2000);
}

export function showRemoveAlert(message) {
    // Seleciona o contêiner
    const body = document.body;

    if (!document.body.querySelector(".custom-remove-alert")) {
      body.innerHTML +=
      `<div class="custom-remove-alert">
        <p>${message}<i class="fa-solid fa-xmark"></i></p>
        
      </div>`
    }

    const customAlert = document.querySelector(".custom-remove-alert")

    setTimeout(() => {
        customAlert.classList.add("fade-out");
        setTimeout(() => {
            customAlert.remove();
        }, 1000);
    }, 2000);
}