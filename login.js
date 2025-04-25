import { loginController } from "./login/loginController.js"
import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form")

    const loader = document.querySelector('.loader')
    const { show, hide } = loaderController(loader)

    const notifications = document.querySelector('.notifications')
    const { showNotification } = notificationsController(notifications)

    loginController(loginForm, show, hide, showNotification)
})
