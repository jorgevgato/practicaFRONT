export const createAd = async (ad) => {

    const token = localStorage.getItem("token")

    const response = await fetch("http://localhost:8000/api/ads", {
        method: "POST",
        body: JSON.stringify(ad),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    if (!response.ok) {
        const data = response.json()
        throw new Error("No se ha podido crear el anuncio.")
    }

}