import { createUser } from "./registerModel.js"

export const registerController = (form, showLoader, hideLoader) => {

    form.addEventListener("submit", (event) => {

        event.preventDefault()
        showLoader()

        const emailElement = form.querySelector('#email')
        const email = emailElement.value

        const passwordElement = form.querySelector('#password')
        const password = passwordElement.value

        const confirmPasswordElement = form.querySelector('#confirm-password')
        const confirmPassword = confirmPasswordElement.value

        const errors = []

        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        if (!emailRegExp.test(email)) {
            errors.push('Error: Formato de email incorrecto.')
        }

        if (password !== confirmPassword) {
            errors.push('Error: Las contraseñas no son iguales.')
        }

        if (errors.length === 0) {
            handleCreateUser(email, password, form)
        } else {
            errors.forEach(error => {
                const event = new CustomEvent('register-error', {
                    detail: error
                })
                form.dispatchEvent(event)
            });
            hideLoader()
        }
    })

    const handleCreateUser = async (email, password, form) => {
        try {
            await createUser(email, password)
            const event = new CustomEvent('register-success', {
                detail: 'Usuario registrado con éxito.'
            })
            form.dispatchEvent(event)
            setTimeout(() => {
                window.location = "/"
            }, 2000)
        } catch (error) {
            const event = new CustomEvent('register-error', {
                detail: error
            })
            form.dispatchEvent(event)
        } finally {
            hideLoader()
        }
    }
}