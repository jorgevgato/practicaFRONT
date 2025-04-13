import { getAds } from "./showAdsModel.js";
import { buildAd } from "./showAdsView.js";

export async function showAdsController() {
    const container = document.querySelector('.ads-container')
    const ads = await getAds()

    if (ads.length > 0) {
        insertAds(ads, container)
    } else {
        container.innerHTML = '<h3>No hay anuncios disponibles.</h3>'
    }
}

function insertAds(ads, container) {
    container.innerHTML = ''
    ads.forEach((ad) => {
        const adHtml = document.createElement("div")
        adHtml.innerHTML = buildAd(ad)
        
        container.appendChild(adHtml)
    })
}