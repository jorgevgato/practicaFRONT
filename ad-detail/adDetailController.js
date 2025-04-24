import { adDetailModel, getLoggedUserInfo, removeAd } from "./adDetailModel.js"
import { buildAdDetailView, buildRemoveButton } from "./adDetailView.js"

export const adDetailController = async (adContainer, adId) => {

    const showRemoveButton = (adId) => {
        const removeButton = buildRemoveButton()
        adContainer.appendChild(removeButton)

        removeButton.addEventListener("click", () => {
            if (confirm("¿Quieres borrar el anuncio?")) {
                removeAd(adId)
            }
        })
    }

    try {
        const event = new CustomEvent("detail-loading-started")
        adContainer.dispatchEvent(event)
        await new Promise(resolve => setTimeout(resolve, 0))

        const adDetail = await adDetailModel(adId)
        adContainer.innerHTML = buildAdDetailView(adDetail)

        const user = await getLoggedUserInfo()
        if (user.id === adDetail.userId) {
            showRemoveButton(adId)
        }

    } catch (error) {

        const event = new CustomEvent("detail-loading-error", {
            detail: error.message
        })
        adContainer.dispatchEvent(event)
        
    } finally {
        const event = new CustomEvent("detail-loading-finished")
        adContainer.dispatchEvent(event)
    } 

}

