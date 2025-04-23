export async function adDetailModel(adId) {

    const response = await fetch(`http://localhost:8000/api/ads/${adId}?_expand=user`)

    if (!response.ok) {
        throw new Error("Error: El anuncio no existe.")
    }

    const adDetail = await response.json()

    return adDetail

}