import { adDetailController } from "./ad-detail/adDetailController.js"
import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { sessionController } from "./session/sessionController.js";

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.querySelector(".loader")
    const {show, hide} = loaderController(loader)
    const notifications = document.querySelector(".notifications")
    const {showNotification} = notificationsController(notifications)
    const session = document.querySelector(".session")
    const searchParams = new URLSearchParams(window.location.search)
    const adId = searchParams.get("id")

    if (adId) {
        const adContainer = document.querySelector(".ad-container")

        adContainer.addEventListener('detail-loading-started', () => {
            show()
        })
        adContainer.addEventListener('detail-loading-finished', () => {
            hide()
        })
        adContainer.addEventListener('detail-loading-error', (event) => {
            const errorMessage = event.detail
            showNotification(errorMessage)

            setTimeout(() => {
                window.location = '/'
            }, 5000)
        })   

        sessionController(session)
        adDetailController(adContainer, adId, showNotification)
        
    } else {
        window.location = '/'      
    }
})

