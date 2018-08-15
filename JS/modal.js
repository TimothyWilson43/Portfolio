const portfolioContainer = document.querySelector('.modal')

portfolioContainer.addEventListener('click', e => {
    e.preventDefault()
    
const modalToggle = e.target.closest('.portfolio-link')
if(! modalToggle) return

const modal = modalToggle.parentNode.nextElementSibling
const closeButton = modal.querys
})