export const buildAdDetailView = (ad) => {

    const date = new Date(ad.updatedAt)

    let adView = `
        <img style="max-width:600px" src=${ad.image}></img>
        <p>${ad.name}</p>
        <p>${ad.description}</p>
        <p>${ad.price} € - <em>${ad.buySell}</em></p>
        <p>Publicado por ${ad.user.username}</p>
        <p>${date.toLocaleString()}</p>
    `
    return adView
}

export const buildRemoveButton = () => {
    const removeButton = document.createElement("button")
    removeButton.textContent = "Borrar"

    return removeButton
}