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
        const adDetail = await adDetailModel(adId)
        adContainer.innerHTML = buildAdDetailView(adDetail)

        const user = await getLoggedUserInfo()
        if (user.id === adDetail.userId) {
            showRemoveButton(adId)
        }

    } catch (error) {
        //enganchar con sistema de errores
        alert(error.message)
    }  
}

