import { loginUser } from "./loginModel.js"

export const loginController = (loginForm) => {

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault()

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
        const token = await loginUser(email, password)

        localStorage.setItem("token", token)
    }
}