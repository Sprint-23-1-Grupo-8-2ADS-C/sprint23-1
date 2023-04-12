const body = document.querySelector("body"),
imgLogo = document.querySelector(".imgLogo");

imgLogo.addEventListener("click", () => {
    body.classList.toggle("light");
})