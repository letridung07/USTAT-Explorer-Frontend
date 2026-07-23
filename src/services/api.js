const BASE_URL = ""

export default getMetadata = async () => {
    const response = await fetch(`${BASE_URL}/`)
    const data = await response.json()
    return data.results
}