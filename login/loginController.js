import { loginUser } from "./loginModel.js"

export const loginController = (loginForm, showLoader, hideLoader, showNotification) => {

    loginForm.addEventListener("submit", (event) => {
        
        event.preventDefault()
        showLoader()

        const emailElement = loginForm.querySelector('#email')
        const email = emailElement.value

        const passwordElement = loginForm.querySelector('#password')
        const password = passwordElement.value

        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        
        if (!emailRegExp.test(email)) {
            errors.push('Formato de email incorrecto.')
        } else {
            handleLoginUser(email,password)
        }
    })

    async function handleLoginUser(email, password) {

        try {
            const token = await loginUser(email, password)
            showNotification('Sesión iniciada con éxito')
            localStorage.setItem("token", token)
            
            setTimeout(() => {
                window.location = '/'
            }, 2000)
            
        } catch (error) {
            showNotification(`Error: ${error.message}`)
        } finally {
            hideLoader()
        }
    }
}