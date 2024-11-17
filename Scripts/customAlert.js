export function showAddAlert(message) {
    // Seleciona o contêiner
    const body = document.body;

    if (!document.body.querySelector(".custom-add-alert")) {

      const alertDiv = document.createElement("div");
      alertDiv.className = "custom-add-alert";
      alertDiv.innerHTML = 
      `<div class="custom-add-alert">
        <p>${message}<i class="fa-solid fa-check"></i></p>
      </div>`

      body.appendChild(alertDiv);
      
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
      const alertDiv = document.createElement("div");
      alertDiv.className = "custom-remove-alert";
      alertDiv.innerHTML = 
      `<div class="custom-remove-alert">
        <p>${message}<i class="fa-solid fa-xmark"></i></p>
      </div>`

      body.appendChild(alertDiv);
      
    }

    const customAlert = document.querySelector(".custom-remove-alert")

    setTimeout(() => {
        customAlert.classList.add("fade-out");
        setTimeout(() => {
            customAlert.remove();
        }, 1000);
    }, 2000);
}