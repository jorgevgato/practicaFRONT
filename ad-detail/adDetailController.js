import { adDetailModel } from "./adDetailModel.js"
import { buildAdDetailView } from "./adDetailView.js"

export const adDetailController = async (adContainer, adId) => {

    try {
        const adDetail = await adDetailModel(adId)
        adContainer.innerHTML = buildAdDetailView(adDetail)
    } catch (error) {
        //enganchar con sistema de errores
        alert(error.message)
    }

    
}