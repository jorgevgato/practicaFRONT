import { adCreatorController } from "./ad-creator/adCreatorController.js"
import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { sessionController } from "./session/sessionController.js";


document.addEventListener("DOMContentLoaded", () => {

    const token = localStorage.getItem('token')
 
    if (!token) {
        window.location = '/login.html'
    }

    const adCreatorForm = document.querySelector('form')
    const session = document.querySelector(".session")

    const loader = document.querySelector('.loader')
    const { show, hide } = loaderController(loader)

    const notifications = document.querySelector('.notifications')
    const { showNotification } = notificationsController(notifications)

    sessionController(session)
    adCreatorController(adCreatorForm, show, hide, showNotification)
})