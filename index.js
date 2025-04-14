import { loaderController } from "./loader/loaderControler.js";
import { showAdsController } from "./show-ads/showAdsController.js";

document.addEventListener("DOMContentLoaded", () => {

    const container = document.querySelector(".ads-container")

    const loader = document.querySelector(".loader")
    const {show, hide} = loaderController(loader)

    container.addEventListener('ad-loading-started', () => {
        show()
    })
    container.addEventListener('ad-loading-finished', () => {
        hide()
    })    
    
    // document.querySelector('.show-ad-button').addEventListener('click', showAdsController)
    showAdsController(container)

})