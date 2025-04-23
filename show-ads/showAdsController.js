import { getAds } from "./showAdsModel.js";
import { buildAd, buildNoAdsWarning } from "./showAdsView.js";

export async function showAdsController(container) {
    
    try {
        const event = new CustomEvent("ad-loading-started")
        container.dispatchEvent(event)
        const ads = await getAds()
        insertAds(ads, container)
        
    } catch (error) {
        const event = new CustomEvent("ad-loading-error", {
            detail: error.message
        })
        container.dispatchEvent(event)
        
    } finally {
        const event = new CustomEvent("ad-loading-finished")
        container.dispatchEvent(event)
    }
}

function insertAds(ads, container) {

    container.innerHTML = ''

    if (ads.length === 0) {
        container.innerHTML = buildNoAdsWarning()
    }

    ads.forEach((ad) => {
        const adHtml = document.createElement("a")
        adHtml.setAttribute("href", `./ad-detail.html?id=${ad.id}`)
        adHtml.innerHTML = buildAd(ad)
        
        container.appendChild(adHtml)
    })
}