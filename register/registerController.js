export const registerController = (form) => {

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const emailElement = form.querySelector('#email')
        const email = emailElement.value

        const passwordElement = form.querySelector('#password')
        const password = passwordElement.value

        const confirmPasswordElement = form.querySelector('#confirm-password')
        const confirmPassword = confirmPasswordElement.value

        const errors = []

        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        if (!emailRegExp.test(email)) {
            errors.push('Formato de email incorrecto')
        }

        if (password !== confirmPassword) {
            errors.push('Las contraseñas no son iguales')
        }

        if (errors.length === 0) {

        } else {
            errors.forEach(error => {
                const event = new CustomEvent('register-error', {
                    detail: error
                })
                form.dispatchEvent(event)
            });
        }
    })
}