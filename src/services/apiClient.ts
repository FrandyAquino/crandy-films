
const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = process.env.TMDB_API_KEY

export const tmdbFetch = async <T>(endpoint: string): Promise<T> => {
  const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}`
  console.log("TMDB API Request URL:", url)
  console.log("TMDB API Key being used:", API_KEY ? "[KEY_PRESENT]" : "[KEY_MISSING]")
  const response = await fetch(url)

  if (!response.ok) {
    const error = await response.json()
    console.error("TMDB API Error Response:", error)
    throw new Error(`TMDB API error: ${error.status_message}`)
  }

  return response.json()
}
