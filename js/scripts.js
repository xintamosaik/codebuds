const init = () => {

	const headerNav = document.getElementById('headerDesktop')
    const mainContent = document.getElementById('mainContent')
    const footer = document.getElementById('docFooter')

    const darkModeIcon = document.getElementById('darkModeIcon')
    darkModeIcon.addEventListener('click', event => {
        document.body.classList.toggle("light")
    })
    
    const darkModeIconMobile = document.getElementById('darkModeIconMobile')
    darkModeIconMobile.addEventListener('touchstart', event => {
        event.preventDefault()
        document.body.classList.toggle("light")
    })

}

document.addEventListener("DOMContentLoaded", init);
