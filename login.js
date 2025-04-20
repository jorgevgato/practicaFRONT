import { loginController } from "./login/loginController.js"

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form")
    loginController(loginForm)
})
