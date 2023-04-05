// Declaração de variaveis igualando a cada elemento necessario para a função desejada
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// Esta função terá como função ativar a navbar-links através de um click mostrando assim o resto dos menus
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})