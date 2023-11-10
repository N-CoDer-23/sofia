const black = document.querySelector(".black")
const live = document.querySelector(".live")
const wow = document.querySelector(".wow")
// const malumot = document.querySelector(".malumot")
const show = document.querySelector(".show")







live.addEventListener("click", ()=>{
    wow.classList.add("malumot")
    show.style.display = "block"
    black.style.display = "block"
    live.style.display = "none"
})

black.addEventListener("click", ()=>{
    wow.classList.add("malumot")
    show.style.display = "none"
    black.style.display = "none"
    live.style.display = "block"
})





