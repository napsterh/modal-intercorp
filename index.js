
const navBurger = document.querySelector(".burger")
const navMenu = document.querySelector(".nav-menu")


navBurger.addEventListener("click", showMenu)

function showMenu() {
    navMenu.classList.toggle("nav-menu-show")
}

function cerrarMenu(){
    navMenu.classList.toggle("nav-menu-show")
}

const openModal = document.querySelector(".open-modal")
const modalContainer = document.querySelector(".modal-container")
const closeModal = document.querySelector(".cerrar-modal")

openModal.addEventListener("click", abrirModal)
closeModal.addEventListener("click", cerrarModal)

function abrirModal() {
    modalContainer.classList.add('show')
}

function cerrarModal() {
    modalContainer.classList.remove('show')
}
