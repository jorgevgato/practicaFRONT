export async function adDetailModel(adId) {

    const response = await fetch(`http://localhost:8000/api/ads/${adId}?_expand=user`)

    if (!response.ok) {
        throw new Error("Error: El anuncio no existe.")
    }

    const adDetail = await response.json()

    return adDetail
}

export async function removeAd(adId) {

    const token = localStorage.getItem('token')

    const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("Error: El anuncio no existe.")
    }

}

export async function getLoggedUserInfo() {

    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:8000/auth/me', {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    const user = await response.json()

    return user

}