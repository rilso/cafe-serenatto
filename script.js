const inputChek = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputChek.addEventListener('click', () => {
    const modo = inputChek.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})
