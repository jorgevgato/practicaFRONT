import { createAd } from "./adCreatorModel.js"

export const adCreatorController = (form, showLoader, hideLoader, showNotification) => {
    form.addEventListener('submit', async (event) => {
        
        event.preventDefault()
        showLoader()

        const nameElement = form.querySelector('#name')
        const name = nameElement.value

        const descriptionElement = form.querySelector('#description')
        const description = descriptionElement.value

        const priceElement = form.querySelector('#price')
        const price = priceElement.value

        const imageElement = form.querySelector('#image')
        let image = imageElement.value
        if (!image.trim()) {
            image = "./assets/PopLogo.png"
        }

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
            showNotification('¡Anuncio creado!')

            setTimeout(() => {
                window.location = '/'
            }, 2000)
            
        } catch (error) {
           showNotification(`Error al crear el anuncio: ${error.message || 'Inténtalo más tarde.'}`)
        
        } finally {
            hideLoader()
        }
    })
}