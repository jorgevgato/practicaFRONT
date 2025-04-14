import { getAds } from "./showAdsModel.js";
import { buildAd } from "./showAdsView.js";

export async function showAdsController() {
    
    try {
        const ads = await getAds()
        insertAds(ads)
        
    } catch (error) {
        alert(error.message)
    }
}

function insertAds(ads) {

    const container = document.querySelector('.ads-container')

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