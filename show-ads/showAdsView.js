export const buildAd = (ad) => {
    return `
        <img src=${ad.image}></img>
        <p>${ad.name}</p>
        <p>${ad.description}</p>
        <p>${ad.price} € - <em>${ad.buySell}</em></p>
    `
}

export const buildNoAdsWarning = () => {
    return '<h3>No hay anuncios disponibles.</h3>'
}