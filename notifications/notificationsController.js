import { buildNotification } from "./notificationsView.js"


export function notificationsController(notifications) {

    const removeNotification = (newNotification) => {
        newNotification.remove()
    }

    const showNotification = (message) => {

        const newNotification = document.createElement('div')
        newNotification.innerHTML = buildNotification(message)
        
        notifications.appendChild(newNotification)

        const closeButton = newNotification.querySelector("button")
        
        closeButton.addEventListener("click", () => {
            removeNotification(newNotification)
        })

        setTimeout(() => {
            removeNotification(newNotification)
        }, 5000)

    }

    return {
        showNotification
    }
}