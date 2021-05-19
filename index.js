
const openMenu = document.querySelector(".burger")
const menuContainer = document.querySelector(".menu-container")
const closeMenu = document.querySelector(".cerrar-menu")


openMenu.addEventListener("click", abrirMenu)
closeMenu.addEventListener("click", cerrarMenu)

function abrirMenu() {
    menuContainer.classList.add("show-menu")
}

function cerrarMenu(){
    menuContainer.classList.remove("show-menu")
}


const openModal = document.querySelector(".open-modal")
const modalContainer = document.querySelector(".modal-container")
const closeModal = document.querySelector(".cerrar-modal")

openModal.addEventListener("click", abrirModal)
closeModal.addEventListener("click", cerrarModal)

function abrirModal() {
    modalContainer.classList.add('show-modal')
}

function cerrarModal() {
    modalContainer.classList.remove('show-modal')
}
