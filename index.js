import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { showAdsController } from "./show-ads/showAdsController.js";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".ads-container")
    const loader = document.querySelector(".loader")
    const notifications = document.querySelector(".notifications")
    const {show, hide} = loaderController(loader)
    const {showNotification} = notificationsController(notifications)

    container.addEventListener('ad-loading-started', () => {
        show()
    })
    container.addEventListener('ad-loading-finished', () => {
        hide()
    })
    container.addEventListener('ad-loading-error', (event) => {
        const errorMessage = event.detail
        showNotification(errorMessage)
    })     
    
    
    
    // document.querySelector('.show-ad-button').addEventListener('click', showAdsController)
    showAdsController(container)

})