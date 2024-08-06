const ModoDark = document.querySelector("#ModoDark");

ModoDark.addEventListener("click", () => {
    const body = document.querySelector("body");
    const link = document.querySelector('.links');
    const Idioma = document.querySelector('.Idioma');
    const devFront = document.querySelector(".devFront");
    const description = document.querySelector(".description");
const menuPart2 = document.querySelector('.menuPart2')


    body.classList.toggle("dark");
    link.classList.toggle("dark");
    Idioma.classList.toggle("dark");
    devFront.classList.toggle("dark");
    description.classList.toggle("dark");
    menuPart2.classList.toggle("dark")
});
