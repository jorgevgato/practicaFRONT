import { createAd } from "./adCreatorModel.js"

export const adCreatorController = (form) => {
    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        const nameElement = form.querySelector('#name')
        const name = nameElement.value

        const descriptionElement = form.querySelector('#description')
        const description = descriptionElement.value

        const priceElement = form.querySelector('#price')
        const price = priceElement.value

        const imageElement = form.querySelector('#image')
        const image = imageElement.value

        const buySellElement = form.querySelector('input[name="buySell"]:checked')
        const buySell = buySellElement.value

        const ad = {
            name,
            description,
            price,
            image,
            buySell
        }

        try {
            await createAd(ad)
            setTimeout(() => {
                window.location = '/'
            }, 2000)
            
        } catch (error) {
            // Conectar con notificación de error para sustituir alert
           // alert(error.message)
        }
    })
}