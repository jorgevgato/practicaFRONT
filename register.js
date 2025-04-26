import { registerController } from "./register/registerController.js"
import { loaderController } from "./loader/loaderController.js";
import {notificationsController} from "./notifications/notificationsController.js"
import { sessionController } from "./session/sessionController.js";

document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.querySelector("form")
    const session = document.querySelector(".session")

    const loader = document.querySelector('.loader')
    const { show, hide } = loaderController(loader)

    const notifications = document.querySelector(".notifications")
    const {showNotification} = notificationsController(notifications)

    registerForm.addEventListener("register-error", (event) => {
        const message = event.detail
        showNotification(message)
    })

    registerForm.addEventListener("register-success", (event) => {
        const message = event.detail
        showNotification(message)
    })

    sessionController(session)
    registerController(registerForm, show, hide)
})