import { loginController } from "./login/loginController.js"
import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { sessionController } from "./session/sessionController.js";

document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.querySelector("form")
    const session = document.querySelector(".session")

    const loader = document.querySelector('.loader')
    const { show, hide } = loaderController(loader)

    const notifications = document.querySelector('.notifications')
    const { showNotification } = notificationsController(notifications)

    sessionController(session)
    loginController(loginForm, show, hide, showNotification)
})
