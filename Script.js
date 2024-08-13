const ModoDark = document.querySelector("#ModoDark");

ModoDark.addEventListener("click", () => {
    const body = document.querySelector("body");
    const link = document.querySelector('.links');
    const Idioma = document.querySelector('.Idioma');
    const devFront = document.querySelector(".devFront");
    const description = document.querySelector(".description");
    const menuPart2 = document.querySelector('.menuPart2')
    const tags = document.querySelector(".tags")
const aboutMeSection = document.querySelector(".aboutMeSection")
const moreInformation = document.querySelector(".moreInformation")
const textInformation = document.querySelector(".textInformation")
const spanSkill = document.querySelector(".spanSkill")
const html = document.querySelector('.html')
const css = document.querySelector('.css')
const JS = document.querySelector('.JS')
const React = document.querySelector('.React')
const myProjects = document.querySelector('.myProjects')
const img = document.querySelector(".IMAGE")
const contactTitle = document.querySelector(".contactTitle")
const contactItem = document.querySelector('.contactItem')



    body.classList.toggle("dark");
    link.classList.toggle("dark");
    Idioma.classList.toggle("dark");
    devFront.classList.toggle("dark");
    description.classList.toggle("dark");
    menuPart2.classList.toggle("dark")
    tags.classList.toggle("dark")
    aboutMeSection.classList.toggle('dark')
    moreInformation.classList.toggle('dark')
    textInformation.classList.toggle('dark')
    spanSkill.classList.toggle("dark")
    html.classList.toggle("dark")
    css.classList.toggle("dark")
    JS.classList.toggle("dark")
    React.classList.toggle("dark")
    myProjects.classList.toggle("dark")
    img.classList.toggle("dark")
contactTitle.classList.toggle('dark')
contactItem.classList.toggle('dark')

});

document.addEventListener('mousemove', function(event) {
    const light = document.getElementById('light');
    const x = event.clientX;
    const y = event.clientY;

    light.style.left = `${x - 50}px`; 
    light.style.top = `${y - 50}px`; 
});