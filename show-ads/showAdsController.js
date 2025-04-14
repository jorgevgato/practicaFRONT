import { getAds } from "./showAdsModel.js";
import { buildAd } from "./showAdsView.js";

export async function showAdsController(container) {
    
    try {
        const event = new CustomEvent("ad-loading-started")
        container.dispatchEvent(event)
        const ads = await getAds()
        insertAds(ads, container)
        
    } catch (error) {
        alert(error.message)

    } finally {
        const event = new CustomEvent("ad-loading-finished")
        container.dispatchEvent(event)
    }
}

function insertAds(ads, container) {

    container.innerHTML = ''

    if (ads.length === 0) {
        container.innerHTML = '<h3>No hay anuncios disponibles.</h3>'
    }

    ads.forEach((ad) => {
        const adHtml = document.createElement("div")
        adHtml.innerHTML = buildAd(ad)
        
        container.appendChild(adHtml)
    })
}