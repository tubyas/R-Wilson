const burguerButton = document.getElementById("burgerMenu");
const sideBar = document.querySelector("aside");

function VerifySideBarToggle() {
    const isClosed = localStorage.getItem("sidebarClosed");

    if (isClosed === "true") {
        sideBar.classList.add("closed");
        burguerButton.classList.add("closed");
    }
}

document.addEventListener("DOMContentLoaded", VerifySideBarToggle)

function ToggleSideBar() {
    sideBar.classList.add("animated");
    sideBar.classList.toggle("closed");
    burguerButton.classList.toggle("closed");

    const isClosed = sideBar.classList.contains("closed");
    localStorage.setItem("sidebarClosed", isClosed);

    setTimeout(() => {
        sideBar.classList.remove("animated");
    }, 50)
}

burguerButton.addEventListener("click", ToggleSideBar)