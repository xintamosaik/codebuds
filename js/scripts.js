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

    const toggleClassTwiceAfterDelay = (elementID, milliseconds) => {
        const targetedElement = document.getElementById(elementID)
        targetedElement.classList.toggle('arrivedByOnsiteLink')
        setTimeout(() => {
            targetedElement.classList.toggle('arrivedByOnsiteLink')
        }, milliseconds)
     }

    const onsiteLinks = document.querySelectorAll('a.onsite')
    onsiteLinks.forEach( onsitelink => {
        onsitelink.addEventListener('click', event => {
            const linkReference = event.currentTarget.href
            const onsiteTargetElementID = linkReference.split('#')[1]
            toggleClassTwiceAfterDelay( onsiteTargetElementID , 5000 ) 
        })
    })

    const  onInputInMainTextArea = targetedTextArea => {
          targetedTextArea.style.height = "auto";
          targetedTextArea.style.height = (targetedTextArea.scrollHeight) + "px";
    }
    const mainTextarea = document.getElementById('mainTextarea')
    mainTextarea.addEventListener("input", event  => {
        onInputInMainTextArea(event.target)
    })
}

console.log('scripts.js:')
document.addEventListener("DOMContentLoaded", init);
