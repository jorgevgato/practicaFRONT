import { adCreatorController } from "./ad-creator/adCreatorController.js"

document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem('token')
 
    if (!token) {
        window.location = '/login.html'
    }

    const adCreatorForm = document.querySelector('form')

    adCreatorController(adCreatorForm)
})